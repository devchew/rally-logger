import pynmea2
import serial
from db import DatabaseManager
import time
from setTimeFromGps import setTimeFromGps

Temp = '0123456789ABCDEF*'

#Startup mode
SET_HOT_START       = '$PMTK101'
SET_WARM_START      = '$PMTK102'
SET_COLD_START      = '$PMTK103'
SET_FULL_COLD_START = '$PMTK104'

#Standby mode -- Exit requires high level trigger
SET_PERPETUAL_STANDBY_MODE      = '$PMTK161'

SET_PERIODIC_MODE               = '$PMTK225'
SET_NORMAL_MODE                 = '$PMTK225,0'
SET_PERIODIC_BACKUP_MODE        = '$PMTK225,1,1000,2000'
SET_PERIODIC_STANDBY_MODE       = '$PMTK225,2,1000,2000'
SET_PERPETUAL_BACKUP_MODE       = '$PMTK225,4'
SET_ALWAYSLOCATE_STANDBY_MODE   = '$PMTK225,8'
SET_ALWAYSLOCATE_BACKUP_MODE    = '$PMTK225,9'

#Set the message interval,100ms~10000ms
SET_POS_FIX         = '$PMTK220'
SET_POS_FIX_100MS   = '$PMTK220,100'
SET_POS_FIX_200MS   = '$PMTK220,200'
SET_POS_FIX_400MS   = '$PMTK220,400'
SET_POS_FIX_800MS   = '$PMTK220,800'
SET_POS_FIX_1S      = '$PMTK220,1000'
SET_POS_FIX_2S      = '$PMTK220,2000'
SET_POS_FIX_4S      = '$PMTK220,4000'
SET_POS_FIX_8S      = '$PMTK220,8000'
SET_POS_FIX_10S     = '$PMTK220,10000'

#Switching time output
SET_SYNC_PPS_NMEA_OFF   = '$PMTK255,0'
SET_SYNC_PPS_NMEA_ON    = '$PMTK255,1'

#To restore the system default setting
SET_REDUCTION               = '$PMTK314,-1'

#Set NMEA sentence output frequencies 
# SET_NMEA_OUTPUT = '$PMTK314,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0'
SET_NMEA_OUTPUT = '$PMTK314,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0'

#Baud rate
SET_NMEA_BAUDRATE          = '$PMTK251'
SET_NMEA_BAUDRATE_115200   = '$PMTK251,115200'
SET_NMEA_BAUDRATE_57600    = '$PMTK251,57600'
SET_NMEA_BAUDRATE_38400    = '$PMTK251,38400'
SET_NMEA_BAUDRATE_19200    = '$PMTK251,19200'
SET_NMEA_BAUDRATE_14400    = '$PMTK251,14400'
SET_NMEA_BAUDRATE_9600     = '$PMTK251,9600'
SET_NMEA_BAUDRATE_4800     = '$PMTK251,4800'

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
        self.previusTotalPerSec = 0
        self.lastInterval = 0
        self.total = 0

    def config(self):
        success = False

        while success:
            try:
                self.__sendCommand(SET_NORMAL_MODE)
                self.__sendCommand(SET_POS_FIX_100MS)
                self.__sendCommand(SET_NMEA_OUTPUT)
                success = True
            except serial.SerialException as e:
                print('Device error: {}'.format(e))
                self.serial.close()
                time.sleep(1)
                self.serial.open()


    def __sendCommand(self, data):
        Check = ord(data[1]) 
        for i in range(2, len(data)):
            Check = Check ^ ord(data[i]) 
        data = data + Temp[16]
        data = data + Temp[(Check//16)]
        data = data + Temp[(Check%16)]
        self.serial.write(data.encode())
        self.serial.write('\r'.encode())
        self.serial.write('\n'.encode())
        print (data)

    def __updateStorePerSec(self):
        self.total += 1
        if (self.lastInterval + 1 <= time.time()):
            self.lastInterval = time.time()
            self.storePerSec = self.total - self.previusTotalPerSec
            self.previusTotalPerSec = self.total

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
                if (cc.startswith('$GNGLL')):
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
            