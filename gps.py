import pynmea2
import serial
import DatabaseMenager
import time
from setTimeFromGps import setTimeFromGps


class GPS:
    def __init__(self):
        self.timeSet = False
        self.running = False
        self.db = DatabaseMenager()
        self.serial = serial.Serial('/dev/serial0', 115200)
        self.sats = 0
        self.qual = 0
        self.storePerSec = 0
        self.lastInterval = 0

    def updateStorePerSec(self):
        if (self.lastInterval + 1 > time.time()):
            self.storePerSec = 0
            return
        self.storePerSec += 1
        self.lastInterval = time.time()

    def readLineFromSerial(self):
        try:
            return self.serial.readline()
        except serial.SerialException as e:
            print('Device error: {}'.format(e))

    def loop(self):
        line = self.readLineFromSerial()
        try:
            cc=str(line, "utf-8")
            if (cc.startswith('$')):
                msg = pynmea2.parse(cc)
                self.db.insert_gps(round(time.time()*1000), cc)
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