import os
from timezonefinder import TimezoneFinder
import pytz
import time


def setTimeFromGps(msg, logger):    
    if msg.status == 'A':

        zeit = msg.datetime

        latitude = msg.latitude
        longitude = msg.longitude

        tf = TimezoneFinder()
        zeitzone_string = tf.timezone_at(lng=longitude, lat=latitude)

        logger('Set timezone to %s', zeitzone_string)
        os.system(f"timedatectl set-timezone {zeitzone_string}")

        zeitzone = pytz.timezone(zeitzone_string)
        zeit_mit_zeitzone = zeit.replace(tzinfo=pytz.utc).astimezone(zeitzone)
        unix_zeit = time.mktime(zeit_mit_zeitzone.timetuple())

        logger('Set time to %s', zeit_mit_zeitzone)
        clk_id = time.CLOCK_REALTIME
        time.clock_settime(clk_id, float(unix_zeit))