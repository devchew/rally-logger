import sqlite3
from sqlite3 import Error
import os

dir_path = os.path.dirname(os.path.realpath(__file__))


class DatabaseManager:
    def __init__(self):
        self.conn = sqlite3.connect(os.path.join(dir_path, "data.db"), check_same_thread=False)
        cursor = self.conn.cursor()
        cursor.execute('CREATE TABLE IF NOT EXISTS gps_data (timestamp, raw)')
        cursor.execute('CREATE TABLE IF NOT EXISTS gyro_data (timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y)')
        self.conn.commit()

    def insert_gps(self, timestamp, raw):
        try:
            cursor = self.conn.cursor()
            cursor.execute('INSERT INTO gps_data VALUES (?, ?)', (timestamp, raw))
            self.conn.commit()
            print(f"Inserted GPS data: Timestamp - {timestamp}, Raw - {raw}")
        except Error as e:
            print('SQL error: {}'.format(e))

    def insert_gyro(self, timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y):
        try:
            cursor = self.conn.cursor()
            cursor.execute('INSERT INTO gyro_data VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', (timestamp, x, y, z, accel_x, accel_y, accel_z, rotation_x, rotation_y))
            self.conn.commit()
            print(f"Inserted gyro data: Timestamp - {timestamp}, X - {x}, Y - {y}, Z - {z}, AccelX - {accel_x}, AccelY - {accel_y}, AccelZ - {accel_z}, RotationX - {rotation_x}, RotationY - {rotation_y}")
        except Error as e:
            print('SQL error: {}'.format(e))

    def close(self):
        self.conn.close()