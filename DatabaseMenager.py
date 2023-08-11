import sqlite3
from threading import Lock

class DatabaseManager:
    def __init__(self):
        self.conn = self.init_db()
        self.lock = Lock()
        self.pending_gps_data = []
        self.pending_gyro_data = []

    def init_db(self):
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        cursor.execute('CREATE TABLE IF NOT EXISTS gps_data (id INTEGER PRIMARY KEY, timestamp TEXT, raw TEXT)')
        cursor.execute('CREATE TABLE IF NOT EXISTS gyro_data (id INTEGER PRIMARY KEY, timestamp TEXT, x REAL, y REAL, z REAL, accel_x REAL, accel_y REAL, accel_z REAL, rotation_x REAL, rotation_y REAL)')
        conn.commit()
        return conn

    def insert_gps(self, timestamp, raw):
        with self.lock:
            if self.lock.locked():
                self.pending_gps_data.append((timestamp, raw))
            else:
                cursor = self.conn.cursor()
                cursor.execute('INSERT INTO gps_data (timestamp, raw) VALUES (?, ?)', (timestamp, raw))
                self.conn.commit()
                print(f"Inserted GPS data: Timestamp - {timestamp}, Raw - {raw}")

                if self.pending_gps_data:
                    for pending_timestamp, pending_raw in self.pending_gps_data:
                        cursor.execute('INSERT INTO gps_data (timestamp, raw) VALUES (?, ?)', (pending_timestamp, pending_raw))
                        print(f"Inserted pending GPS data: Timestamp - {pending_timestamp}, Raw - {pending_raw}")
                    self.conn.commit()
                    self.pending_gps_data = []

    def insert_gyro(self, timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y):
        with self.lock:
            if self.lock.locked():
                self.pending_gyro_data.append((timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y))
            else:
                cursor = self.conn.cursor()
                cursor.execute('INSERT INTO gyro_data (timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', (timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y))
                self.conn.commit()
                print(f"Inserted gyro data: Timestamp - {timestamp}, X - {x}, Y - {y}, Z - {z}, AccelX - {accel_x}, AccelY - {accel_y}, AccelZ - {accel_z}, RotationX - {rotation_x}, RotationY - {rotation_y}")

                if self.pending_gyro_data:
                    for (
                        pending_timestamp, pending_x, pending_y, pending_z,
                        pending_accel_x, pending_accel_y, pending_accel_z,
                        pending_rotation_x, pending_rotation_y
                    ) in self.pending_gyro_data:
                        cursor.execute('INSERT INTO gyro_data (timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', (
                            pending_timestamp, pending_x, pending_y, pending_z,
                            pending_accel_x, pending_accel_y, pending_accel_z,
                            pending_rotation_x, pending_rotation_y
                        ))
                        print(f"Inserted pending gyro data: Timestamp - {pending_timestamp}, X - {pending_x}, Y - {pending_y}, Z - {pending_z}, AccelX - {pending_accel_x}, AccelY - {pending_accel_y}, AccelZ - {pending_accel_z}, RotationX - {pending_rotation_x}, RotationY - {pending_rotation_y}")
                    self.conn.commit()
                    self.pending_gyro_data = []

    def close(self):
        self.conn.close()