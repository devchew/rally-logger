
import smbus # importujemy blibliotekę odpowiedzialną za komunikację z czujnikie                                                                                                             m
import math  # importujemy bibliotekę "matematyczną"
import time
from db import DatabaseManager

class Gyro:
    def __init__(self):
        self.running = False
        self.storing = False
        self.db = DatabaseManager()
        self.power_mgmt_1=0x6b # do zmiennej podajemy nr rejestru wzbudzenia czujnika
        self.address = 0x68
        self.storePerSec = 0
        self.lastStorePerSec = 0
        self.lastInterval = 0
        self.total = 0
        self.bus = 0


    def read_byte(self, adr): # funkcja odczytu pojedynczego byte'u
        print(self.bus.read_byte_data(self.address, adr))
        return self.bus.read_byte_data(self.address, adr)

    def read_word(self, adr): # funkcja przetwarzająca dwa koljne byte'y w wielkość 16 - b                                                                                                             itową
        high = self.bus.read_byte_data(self.address, adr)
        low = self.bus.read_byte_data(self.address, adr+1)
        val = (high <<8) + low
        return val

    def read_word_2c(self, adr): # funkcja przeliczająca wartość binarną na dziesiętną.
        val = self.read_word(adr)
        if(val >= 0x8000): # najstarszy bit mówi czy liczba jest dodatnia czy ujemna
            return -((65535 - val) + 1)
        else:
            return val

    def dist(self, a,b):
        return math.sqrt((a*a)+(b*b))

    def get_y_rotation(self, x,y,z):
        radians = math.atan2(x, self.dist(y,z))
        return -math.degrees(radians)

    def get_x_rotation(self, x,y,z):
        radians = math.atan2(y, self.dist(x,z))
        return math.degrees(radians)
    
    def updateStorePerSec(self):
        self.total += 1
        if (self.lastInterval + 1 <= time.time()):
            self.lastInterval = time.time()
            self.storePerSec = self.total - self.lastStorePerSec 
            self.lastStorePerSec = self.total
        
    def startStroing(self):
        self.storing = True

    def stopStoring(self):
        self.storing = False

    def stop(self):
        self.running = False

    def start(self):
        self.running = True
        self.bus = smbus.SMBus(1) # aktywujemy komunikację w opraciu o smbus
        self.bus.write_byte_data(self.address, self.power_mgmt_1, 0) # wzbudzamy czujnik do działania
        

        while self.running:
            try: 
                timestamp = self.db.getTimestamp()
                gyro_xout = self.read_word_2c(0X43)      # odczyt z konkretnych numerów rejestru                                                                                                              - żyroskop
                gyro_yout = self.read_word_2c(0X45)
                gyro_zout = self.read_word_2c(0X47)
                #print ("gyro_xout: ", gyro_xout, " scaled: ", (gyro_xout / 131)) # matematy                                                                                                             ka opisana w dokumentacji czujnika
                #print ("gyro_yout: ", gyro_yout, " scaled: ", (gyro_yout / 131))
                #print ("gyro_zout: ", gyro_zout, " scaled: ", (gyro_zout / 131))
                #print ("accelerometer data")
                #print ("------------------")
                accel_xout = self.read_word_2c(0x3b) # odczyt z konkretnych numerów rejestru - ak                                                                                                             celerometr
                accel_yout = self.read_word_2c(0x3d)
                accel_zout = self.read_word_2c(0x3f)
                accel_xout_scaled = accel_xout / 16383.0 # matematyka opisana w dokumentacji                                                                                                              czujnika
                accel_yout_scaled = accel_yout / 16383.0
                accel_zout_scaled = accel_zout / 16383.0
                #print ("accel_xout : ", accel_xout, " scaled: ", accel_xout_scaled)
                #print ("accel_yout : ", accel_yout, " scaled: ", accel_yout_scaled)
                #print ("accel_zout : ", accel_zout, " scaled: ", accel_zout_scaled)

                x=self.get_x_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
                #print ("x_rotation: ",x)
                y=self.get_y_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
                #print ("y_rotation: ", y)
                #print ("***************************")
                if (self.storing):
                    self.db.insert_gyro(timestamp,(gyro_xout / 131) ,(gyro_yout / 131) ,(gyro_zout / 131) ,accel_xout_scaled ,accel_yout_scaled ,accel_zout_scaled ,x ,y )
                self.updateStorePerSec()

            except:
                continue