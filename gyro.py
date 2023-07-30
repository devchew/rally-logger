
import smbus # importujemy blibliotekę odpowiedzialną za komunikację z czujnikie                                                                                                             m
import math  # importujemy bibliotekę "matematyczną"
import time
import sys
from logger import create_logger

power_mgmt_1=0x6b # do zmiennej podajemy nr rejestru wzbudzenia czujnika

def read_byte(adr): # funkcja odczytu pojedynczego byte'u
    print(bus.read_byte_data(address, adr))
    return bus.read_byte_data(address, adr)

def read_word(adr): # funkcja przetwarzająca dwa koljne byte'y w wielkość 16 - b                                                                                                             itową
    high = bus.read_byte_data(address, adr)
    low = bus.read_byte_data(address, adr+1)
    val = (high <<8) + low
    return val

def read_word_2c(adr): # funkcja przeliczająca wartość binarną na dziesiętną.
    val = read_word(adr)
    if(val >= 0x8000): # najstarszy bit mówi czy liczba jest dodatnia czy ujemna
        return -((65535 - val) + 1)
    else:
        return val

def dist(a,b):
    return math.sqrt((a*a)+(b*b))

def get_y_rotation(x,y,z):
    radians = math.atan2(x, dist(y,z))
    return -math.degrees(radians)

def get_x_rotation(x,y,z):
    radians = math.atan2(y, dist(x,z))
    return math.degrees(radians)

def send(message): 
    sys.stdout.write("gyro:" + message + "\n")
    sys.stdout.flush()

send("log=prepare")
logger = create_logger("gyro", "csv")
logger("ts,g_x,g_y,g_z,a_x,a_y,a_z,r_x,r_y \n")

bus = smbus.SMBus(1) # aktywujemy komunikację w opraciu o smbus
address = 0x68
bus.write_byte_data(address, power_mgmt_1, 0) # wzbudzamy czujnik do działania
send("log=start")

while True:
    try: 
        gyro_xout = read_word_2c(0X43)      # odczyt z konkretnych numerów rejestru                                                                                                              - żyroskop
        gyro_yout = read_word_2c(0X45)
        gyro_zout = read_word_2c(0X47)
        #print ("gyro_xout: ", gyro_xout, " scaled: ", (gyro_xout / 131)) # matematy                                                                                                             ka opisana w dokumentacji czujnika
        #print ("gyro_yout: ", gyro_yout, " scaled: ", (gyro_yout / 131))
        #print ("gyro_zout: ", gyro_zout, " scaled: ", (gyro_zout / 131))
        #print ("accelerometer data")
        #print ("------------------")
        accel_xout = read_word_2c(0x3b) # odczyt z konkretnych numerów rejestru - ak                                                                                                             celerometr
        accel_yout = read_word_2c(0x3d)
        accel_zout = read_word_2c(0x3f)
        accel_xout_scaled = accel_xout / 16383.0 # matematyka opisana w dokumentacji                                                                                                              czujnika
        accel_yout_scaled = accel_yout / 16383.0
        accel_zout_scaled = accel_zout / 16383.0
        #print ("accel_xout : ", accel_xout, " scaled: ", accel_xout_scaled)
        #print ("accel_yout : ", accel_yout, " scaled: ", accel_yout_scaled)
        #print ("accel_zout : ", accel_zout, " scaled: ", accel_zout_scaled)

        x=get_x_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
        #print ("x_rotation: ",x)
        y=get_y_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
        #print ("y_rotation: ", y)
        #print ("***************************")
        logger(f'{time.time()},{(gyro_xout / 131)},{(gyro_yout / 131)},{(gyro_zout / 131)},{accel_xout_scaled},{accel_yout_scaled},{accel_zout_scaled},{x},{y}\n')
        send("log=stored")
        send("acc=" + accel_xout_scaled)
    except:
        continue