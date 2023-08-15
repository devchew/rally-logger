import RPi.GPIO as GPIO


KEY_UP_PIN     = 6 
KEY_DOWN_PIN   = 19
KEY_LEFT_PIN   = 5
KEY_RIGHT_PIN  = 26
KEY_PRESS_PIN  = 13

KEY1_PIN       = 21
KEY2_PIN       = 20
KEY3_PIN       = 16

class Buttons:
    def __init__(self):
        self.__buttons = {
            "KEY_UP": 6,
            "KEY_DOWN": 19,
            "KEY_LEFT": 5,
            "KEY_RIGHT": 26,
            "KEY_PRESS": 13,
            "KEY1": 21,
            "KEY2": 20,
            "KEY3": 16
        }
        self.__setup_gpio()
        self.states = {
            "KEY_UP": False,
            "KEY_DOWN": False,
            "KEY_LEFT": False,
            "KEY_RIGHT": False,
            "KEY_PRESS": False,
            "KEY1": False,
            "KEY2": False,
            "KEY3": False
        }
        self.callback = None

    def __setup_gpio(self):
        GPIO.setmode(GPIO.BCM)

        for pin in self.__buttons.values():
            GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
            GPIO.add_event_detect(pin, GPIO.BOTH, callback=self.__on_change_callback)

    def __on_change_callback(self, channel):
        for button, pin in self.__buttons.items():
            if pin == channel:
                if (GPIO.input(channel) == 0):
                    self.states[button] = True
                else:
                    self.states[button] = False

