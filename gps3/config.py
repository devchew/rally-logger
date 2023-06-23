#!/usr/bin/python3
# -*- coding:utf-8 -*-
import serial
import Hobot.GPIO as GPIO
import time
Temp = '0123456789ABCDEF*'



class config(object):
    FORCE  = 17
    STANDBY= 4
    def __init__(ser, Baudrate = 9600):
        ser.serial = serial.Serial("/dev/serial0",Baudrate)
        GPIO.setmode(GPIO.BCM)
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(ser.FORCE, GPIO.IN)
        GPIO.setup(ser.STANDBY, GPIO.OUT)
        GPIO.output(ser.STANDBY, GPIO.HIGH)
        
    def Uart_SendByte(ser, value): 
        ser.serial.write(value.encode()) 
        
    def Uart_SendString(ser, value): 
        ser.serial.write(value.encode())
  

    def Uart_ReceiveByte(ser): 
        return ser.serial.read(1)

    def Uart_ReceiveString(ser, value):
        data_tem = ''
        if ser.serial.inWaiting():
            time.sleep(1)
            data_tem = ser.serial.read(ser.serial.inWaiting()).decode()
        return data_tem
        
    def Uart_Set_Baudrate(ser, Baudrate):
         ser.serial = serial.Serial("/dev/serial0",Baudrate)

    
    
    