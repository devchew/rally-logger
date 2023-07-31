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
        self.__previous_states = {button: GPIO.input(pin) for button, pin in self.__buttons.items()}
        self.callback = None

    def __setup_gpio(self):
        GPIO.setmode(GPIO.BCM)

        for pin in self.__buttons.values():
            GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
            GPIO.add_event_detect(pin, GPIO.BOTH, callback=self.__on_change_callback)

    def __on_change_callback(self, channel):
        for button, pin in self.__buttons.items():
            if pin == channel:
                button_state = GPIO.input(channel)
                if button_state != self.__previous_states[button]:
                    self.__previous_states[button] = button_state
                    self.__onChange(button, button_state)

    def __onChange(self, button_name, button_state):
        if self.callback is not None:
            self.callback(button_name, not button_state)