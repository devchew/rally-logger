import threading
import time
import os
from display import Display
from buttons import Buttons
import RPi.GPIO as GPIO
from gps import GPS
from gyro import Gyro
from www import web, getAddress

if __name__ == "__main__":
    try:

        gps = GPS()
        gpsThread = threading.Thread(target=gps.start, daemon=True)
        
        gyro = Gyro()
        gyroThread = threading.Thread(target=gyro.start, daemon=True)

        www_thread = threading.Thread(target=web, daemon=True)

        display = Display()
        display.welcomeScreen()
        time.sleep(1)
        buttons = Buttons()
              
        percent = 0
        currentButtonPressed = 0
        state = 0
        newState = 0
        # 0 - waiting for action
        # 1 - shutdown
        # 2 - recording
        # 3 - hosting www

        # display.waitingForGpsTime()
        # gps.updateTime()
        # display.timeUpdated()
        time.sleep(1)

        gpsThread.start()
        gyroThread.start()

        while True:            
            display.drawFrame()

            currentButtonPressed = 0
            if (buttons.states["KEY1"]):
                currentButtonPressed = 1
            if (buttons.states["KEY2"]):
                currentButtonPressed = 2
            if (buttons.states["KEY3"]):
                currentButtonPressed = 3
            
            display.drawActions("PWR", ("Stop" if state == 2 else "Start"), "www", state)

            # shutdown action
            if (state == 1):
                display.shutdownScreen()
                print("sudo shutdown -h now")
                os.system("sudo shutdown -h now")
                time.sleep(10) 

            # recored
            
            if (state == 3):
                addr = getAddress()
                display.printText(5,25, addr['hostname'] + ".local")
                display.printText(5,35, addr['ip'])

            if (state == 0):
                display.printText(0,17,"Sats: " + str(gps.current['sats']))
                display.printText(0,30,"gps/s: " + str(gps.storePerSec))
                display.printText(0,40,"gyro/s: " + str(gyro.storePerSec))

            if (state == 2):
                addr = getAddress()
                display.printText(5,25, str(gps.current['speed']) + " km/h")

            # handle buttons
            if (currentButtonPressed != 0):
                percent += 5
                if (currentButtonPressed == 1):
                    display.buttonPressOverlay("Shuting down", percent)
                    newState = 1
 
                if (currentButtonPressed == 2):
                    percent += 5
                    display.buttonPressOverlay("Starting", percent)
                    newState = 0 if state == 2 else 2
                
                if (currentButtonPressed == 3):
                    percent += 5
                    display.buttonPressOverlay("www", percent)
                    newState = 0 if state == 3 else 3
                        
            else:
                if(percent >= 100):
                    if (newState == 2):
                        print('store telemtry start')
                        gps.startStroing()
                        gyro.startStroing()
                    if (state == 2 and newState != state):
                        print('store telemtry stop')
                        gps.stopStoring()
                        gyro.stopStoring()
                    if (newState == 3):
                        gps.stop()
                        gyro.stop()
                        www_thread.start()
                    if (state == 3 and newState != state):
                        gps.start()
                        gyro.start()
                        # kill www proces somehow

                    print("change state from: ", state, " to: ", newState)
                    state = newState
                percent = 0

            
            display.update()
            

    except KeyboardInterrupt:
        GPIO.cleanup()