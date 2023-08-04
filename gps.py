import sys
import pynmea2
import serial
from logger import create_logger

ser = serial.Serial('/dev/serial0', 115200)
timeSet = False
# https://www.haraldkreuzer.net/en/news/using-gps-module-set-correct-time-raspberry-pi-3-a-plus-without-network

def setTimeOnce(msg):
    if (timeSet):
        return
    
    if msg.status == 'A':
        logger.debug('Got Fix')

        zeit = msg.datetime

        latitude = msg.latitude
        longitude = msg.longitude

        tf = TimezoneFinder()
        zeitzone_string = tf.timezone_at(lng=longitude, lat=latitude)

        logger.debug('Set timezone to %s', zeitzone_string)
        os.system(f"timedatectl set-timezone {zeitzone_string}")

        zeitzone = pytz.timezone(zeitzone_string)
        zeit_mit_zeitzone = zeit.replace(tzinfo=pytz.utc).astimezone(zeitzone)
        unix_zeit = time.mktime(zeit_mit_zeitzone.timetuple())

        logger.debug('Set time to %s', zeit_mit_zeitzone)
        clk_id = time.CLOCK_REALTIME
        time.clock_settime(clk_id, float(unix_zeit))

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