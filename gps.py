import pynmea2
import serial
from db import DatabaseManager
import time
from setTimeFromGps import setTimeFromGps


class GPS:
    def __init__(self):
        self.timeSet = False
        self.running = False
        self.db = DatabaseManager()
        self.serial = serial.Serial('/dev/serial0', 115200)
        self.sats = 0
        self.qual = 0
        self.storePerSec = 0
        self.lastInterval = 0
        self.total = 0

    def updateStorePerSec(self):
        self.total += 1
        if (self.lastInterval + 1 < time.time()):
            self.lastInterval = time.time()
            self.storePerSec = 0
            return
        self.storePerSec += 1

    def readLineFromSerial(self):
        try:
            return self.serial.readline()
        except serial.SerialException as e:
            print('Device error: {}'.format(e))
            self.serial.close()
            time.sleep(1)
            self.serial.open()

    def loop(self):
        line = self.readLineFromSerial()
        try:
            cc=str(line, "utf-8")
            if (cc.startswith('$')):
                self.db.insert_gps(round(time.time()*1000), cc)
                self.updateStorePerSec()
                msg = pynmea2.parse(cc)
                self.sats = msg.num_sats
                self.qual = msg.gps_qual
        except:
            print('parse error')

    def start(self):
        self.running = True
        while self.running:
            self.loop()

    def stop(self):
        self.running = False

    def updateTime(self):
        while self.timeSet == False:
            line = self.readLineFromSerial()
            msg=str(line, "utf-8")
            if (msg.startswith('$')):
                self.timeSet = setTimeFromGps(msg)