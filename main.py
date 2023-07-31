import subprocess
import threading
import time
import os
from display import Display
from buttons import Buttons
import RPi.GPIO as GPIO


dir_path = os.path.dirname(os.path.realpath(__file__))

class SensorMonitor:
    def __init__(self):
        # self.sensor_scripts = [dir_path + "/gps.py", dir_path + "/gyro.py"]
        self.sensor_scripts = [dir_path + "/gyro.py"]
        self.sensor_processes = [self.run_sensor_script(script) for script in self.sensor_scripts]
        self.data = {
            'gpsTotal':0,
            'sats':0,
            'gyroTotal':0
        }

    def run_sensor_script(self, script_filename):
        return subprocess.Popen(
            ["python", script_filename],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True
        )
    
    def parse(self, raw):
        if ("gps:log=stored" in raw):
            self.data['gpsTotal'] += 1
        if ("gyro:log=stored" in raw):
            self.data['gyroTotal'] += 1
        if ("gps:sats" in raw):
            self.data['sats'] = raw.split('=')[1]

    def start(self):
        try:
            while True:
                for i, process in enumerate(self.sensor_processes):
                    if process.poll() is not None:  # Check if the process has terminated
                        print(f"Sensor process {i+1} terminated. Restarting...")
                        self.sensor_processes[i] = self.run_sensor_script(self.sensor_scripts[i])

                for process in self.sensor_processes:
                    stdout_line = process.stdout.readline().strip()
                    if stdout_line :
                        print(stdout_line)
                        self.parse(stdout_line)

        except KeyboardInterrupt:
            self.stop()

    def stop(self):
        for process in self.sensor_processes:
            process.terminate()

    def getData(self):
        return self.data



if __name__ == "__main__":
    try:

        display = Display()
        display.welcomeScreen()
        buttons_instance = Buttons()
        loop = True
        time.sleep(3)

        def buttonCallback(button_name, button_state):
            if(button_name == "KEY1" and button_state == True):
                display.welcomeScreen()
                os.system("sudo shutdown -h now")  
            # Replace this function with your desired actions when a button changes state
            print(f"Button {button_name} changed state to {button_state}")

        buttons_instance.callback = buttonCallback

        sensor_monitor = SensorMonitor()

        # # Start the sensor monitoring in a separate thread
        sensor_thread = threading.Thread(target=sensor_monitor.start)
        sensor_thread.daemon = True  # Allow the program to exit even if this thread is running
        sensor_thread.start()

        # # Start the getData loop in the main thread
        last = {
            'gpsTotal':0,
            'sats':0,
            'gyroTotal':0
        }

        while loop:
            time.sleep(1)
            data = sensor_monitor.getData()

            display.clear()
            display.printText(0,15,"Sats: " + str(data['sats']))
            display.printText(0,30,"gyro/s: " + str(data['gyroTotal'] - last['gyroTotal']) + " gps/s: " + str(data['gpsTotal'] - last['gpsTotal']))
            display.printText(0,50,"Total: gps="+ str(data['gpsTotal']) + " gyro=" + str(data['gyroTotal']))
            display.update()
            
            last = data.copy()

    except KeyboardInterrupt:
        GPIO.cleanup()