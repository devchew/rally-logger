import SH1106
from PIL import Image,ImageDraw,ImageFont
import os
from datetime import datetime

dir_path = os.path.dirname(os.path.realpath(__file__))

class Display:
    def __init__(self):
        self.display = SH1106.SH1106()
        self.display.Init()
        self.display.clear()
        
        # Create blank image for drawing.
        # Make sure to create image with mode '1' for 1-bit color.
        self.frame = Image.new('1', (self.display.width, self.display.height), "WHITE")

        # Get drawing object to draw on image.
        self.draw = ImageDraw.Draw(self.frame)

        # Init fonts
        self.font = ImageFont.truetype(dir_path + '/Font.ttf', 10)
        self.font10 = ImageFont.truetype(dir_path + '/Font.ttf',13)

    def clear(self):
        self.draw.rectangle([0,0,self.display.width, self.display.height], "WHITE")
        self.update()

    def update(self):
        self.display.ShowImage(self.display.getbuffer(self.frame))


    def printText(self, x, y, text):
        self.draw.text((x,y), text, font = self.font, fill = 0)


    def welcomeScreen(self):
        now = datetime.now()
        dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

        self.printText(30,0,"Rally-logger")
        self.printText(15, 30, dt_string)
        self.update()
