import subprocess
import threading
import time
import os

class SensorMonitor:
    def __init__(self):
        self.sensor_scripts = ["gps.py", "gyro.py"]
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
                        # print(stdout_line)
                        self.parse(stdout_line)

        except KeyboardInterrupt:
            self.stop()

    def stop(self):
        for process in self.sensor_processes:
            process.terminate()

    def getData(self):
        return self.data

def get_data_loop(sensor_monitor):
    last = {
            'gpsTotal':0,
            'sats':0,
            'gyroTotal':0
        }
    while True:
        time.sleep(1)
        data = sensor_monitor.getData()
        os.system('cls' if os.name == 'nt' else 'clear')
        print("gyro/s: ", data['gyroTotal'] - last['gyroTotal'])
        print("gps/s: ", data['gpsTotal'] - last['gpsTotal'])
        print("sats: ", data['sats'])
        print("total stored: gps=", data['gpsTotal'], " gyro=", data['gyroTotal'])
        last = data.copy()

if __name__ == "__main__":
    sensor_monitor = SensorMonitor()

    # Start the sensor monitoring in a separate thread
    sensor_thread = threading.Thread(target=sensor_monitor.start)
    sensor_thread.daemon = True  # Allow the program to exit even if this thread is running
    sensor_thread.start()

    # Start the getData loop in the main thread
    get_data_loop(sensor_monitor)
