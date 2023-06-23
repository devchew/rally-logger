# -*- coding:utf-8 -*-
import L76X
import time
import math
from gps3 import agps3
import coordTransform_utils as transform 

x=L76X.L76X()
x.L76X_Send_Command(x.SET_POS_FIX_400MS);

#Set output message
x.L76X_Send_Command(x.SET_NMEA_OUTPUT);

x.L76X_Exit_BackupMode();

#GPSDSocket creates a GPSD socket connection & request/retrieve GPSD output.
gps_socket = agps3.GPSDSocket()
#DataStream unpacks the streamed gpsd data into python dictionaries.
data_stream = agps3.DataStream()
gps_socket.connect()
gps_socket.watch()

gcj02_lng_lat = [0.0,0.0]       #buffer to save gcj02 coordinate
bd09_lng_lat = [0.0,0.0]        #buffer to save bd09 coordinate

try:
    print('gps device make wgs84 coordinate\r\nwgs84 coordinate is for OpenStreetMap\r\ngcj02 coordinate is for amap or google map\r\nbd09 coordinate is for baidu map\r\n\033[1;31m Please press Ctrl+c if want to exit \033[0m')
    for new_data in gps_socket:
        if new_data:
            data_stream.unpack(new_data)    #uppack the nmea 
            if data_stream.lat != 'n/a' and data_stream.lon != 'n/a':                                                   # if the data ready or not
                gcj02_lng_lat = transform.wgs84_to_gcj02(float(data_stream.lon),float(data_stream.lat))                 # transform coordinate,wgs84 to gcj02
                bd09_lng_lat = transform.wgs84_to_bd09(float(data_stream.lon),float(data_stream.lat))                   # transform coordinate,wgs84 to bd09
                print('altitude       = ', data_stream.alt,'M',end='\r\n',flush=True)                                   # show the altitude
                print('wgs84 lon,lat  = ',data_stream.lon,',',data_stream.lat,end='\r\n',flush=True)                    # show wgs84 coordinate,OpenStreetMap use wgs84 coordinate
                print('google lon.lat = %.9f,%.9f' %(gcj02_lng_lat[1],gcj02_lng_lat[0]),end='\r\n',flush=True)          # show gcj02 coordinate,google map use wgs84 coordinate
                print('amap lon.lat   = %.9f,%.9f' %(gcj02_lng_lat[0],gcj02_lng_lat[1]),end='\r\n',flush=True)          # show gcj02 coordinate,amap soso map use wgs84 coordinate
                print('bd09 lon,lat   = %.9f,%.9f' %(bd09_lng_lat[0],bd09_lng_lat[1]),end='\r\n',flush=True)            # show bd09 coordinate,baidu map use wgs84 coordinate
                print('speed          = ', data_stream.speed,'KM/H',end='\r\n',flush=True)                              # show speed
                for i in range(0,10):                                                                                   # delay 10 seconds
                    print('update after {0} seconds'.format(10-i),end='\r',flush=True)
                    time.sleep(1)
                print('\x1b[6A',end='\r')
            else:
                print('\033[1;32m Module dont ready,please put the antenna outdoors and wait a moment\033[0m',end='\r',flush=True)
except:
    x.close()
    exit()
