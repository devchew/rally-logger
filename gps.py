import pynmea2
import serial
from db import DatabaseManager
import time
from setTimeFromGps import setTimeFromGps


class GPS:
    def __init__(self):
        self.timeSet = False
        self.running = False
        self.storing = False
        self.db = DatabaseManager()
        self.serial = serial.Serial('/dev/serial0', 115200)
        self.current = {
            "sats": 0,
            "qual": 0,
            "speed": 0,
        }
        self.storePerSec = 0
        self.lastInterval = 0
        self.total = 0

    def __updateStorePerSec(self):
        self.total += 1
        if (self.lastInterval + 1 < time.time()):
            self.lastInterval = time.time()
            self.storePerSec = 0
            return
        self.storePerSec += 1

    def __readLineFromSerial(self):
        try:
            return self.serial.readline()
        except serial.SerialException as e:
            print('Device error: {}'.format(e))
            self.serial.close()
            time.sleep(1)
            self.serial.open()

    def loop(self):
        line = self.__readLineFromSerial()
        timestamp = self.db.getTimestamp()
        try:
            cc=str(line, "utf-8")
            if (cc.startswith('$')):
                if (self.storing):
                    self.db.insert_gps(timestamp, cc)
                self.__updateStorePerSec()
                msg = pynmea2.parse(cc)
                if(hasattr(msg, 'num_sats')):
                    self.current['sats'] = msg.num_sats
                if(hasattr(msg, "gps_qual")):
                    self.current['qual'] = msg.gps_qual
                if(hasattr(msg, "spd_over_grnd_kmph")):
                    self.current['speed'] = msg.spd_over_grnd_kmph
        except:
            pass

    def start(self):
        self.running = True
        while self.running:
            self.loop()

    def stop(self):
        self.running = False

    def startStroing(self):
        self.storing = True

    def stopStoring(self):
        self.storing = False

    def updateTime(self):
        while self.timeSet == False:
            line = self.__readLineFromSerial()
            try:
                cc=str(line, "utf-8")
                if (cc.startswith('$')):
                    msg = pynmea2.parse(cc)
                    self.timeSet = setTimeFromGps(msg)
            except:
                continue
            