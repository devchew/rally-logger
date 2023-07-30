import sys
import pynmea2
import serial
from logger import create_logger

ser = serial.Serial('/dev/serial0', 115200)

# https://www.haraldkreuzer.net/en/news/using-gps-module-set-correct-time-raspberry-pi-3-a-plus-without-network


def send(message): 
    sys.stdout.write("gps:" + message + "\n")
    sys.stdout.flush()

send("log=prepare")
logger = create_logger("gps", "nmea")
send("log=start")
while 1:
    try:
        line = ser.readline()
        try:
            cc=str(line, "utf-8")
            if (cc.startswith('$')):
                logger(cc)
                msg = pynmea2.parse(cc)
                try:
                    send('log=stored')
                    if(hasattr(msg, 'num_sats')):
                        send('sats=' + msg.num_sats)
                    if(hasattr(msg, 'gps_qual')):   
                        send('qual=' + msg.gps_qual)
                except:
                    continue
        except:
            continue
    except serial.SerialException as e:
        print('Device error: {}'.format(e))
        break