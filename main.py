import threading
import time
import os
from display import Display
from buttons import Buttons
import RPi.GPIO as GPIO
from gps import GPS
from gyro import Gyro

if __name__ == "__main__":
    try:

        gps = GPS()
        gpsThread = threading.Thread(target=gps.start)
        gpsThread.daemon = True  # Allow the program to exit even if this thread is running
        
        gyro = Gyro()
        gyroThread = threading.Thread(target=gyro.start)
        gyroThread.daemon = True  # Allow the program to exit even if this thread is running

        display = Display()
        display.welcomeScreen()
        buttons_instance = Buttons()
        

        def buttonCallback(button_name, button_state):
            if(button_name == "KEY1" and button_state == True):
                display.shutdownScreen()
                os.system("sudo shutdown -h now")  
            if(button_name == "KEY2" and button_state == True):
                if (gyro.running):
                    print("gyro stop")
                    gyro.stop()
                else:
                    print("gyro start")
                    display.startLoggingScreen()
                    gyroThread.start()
            if(button_name == "KEY3" and button_state == True):
                if (gps.running):
                    print("gps stop")
                    gps.stop()
                else:
                    print("gps start")
                    display.startLoggingScreen()
                    gpsThread.start()
            print(f"Button {button_name} changed state to {button_state}")

        buttons_instance.callback = buttonCallback
       

        while True:
            time.sleep(1)
            

            display.clear()
            display.printText(30,0,"Rally-logger")
            display.printText(0,15,"Sats: " + str(gps.sats))
            display.printText(0,30,"gyro/s: " + str(gyro.storePerSec) + " gps/s: " + str(gps.storePerSec))
            display.printText(0,40,"gyro/t: " + str(gyro.total) + " gps/t: " + str(gps.total))
            display.update()
            

    except KeyboardInterrupt:
        GPIO.cleanup()