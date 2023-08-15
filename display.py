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
        self.font = ImageFont.truetype(dir_path + '/Font.ttf', 8)
        self.fontXL = ImageFont.truetype(dir_path + '/FontXl.ttf',25)

    def clear(self):
        self.draw.rectangle([0,0,self.display.width, self.display.height], "WHITE")

    def update(self):
        self.display.ShowImage(self.display.getbuffer(self.frame))


    def printText(self, x, y, text):
        self.draw.text((x,y), text, font = self.font, fill = 0)

    def printTextXL(self, x, y, text):
        self.draw.text((x,y), text, font = self.fontXL, fill = 0)

    def printCenter(self, text, yOffset = 0):
        width = self.draw.textlength(text, self.font)
        self.draw.text(((self.display.width - width) / 2, (self.display.height / 2) + yOffset), text, font = self.font, fill = 0)

    def shutdownScreen(self):
        self.clear()

        self.printCenter("Shutdown")
        self.update()

    def startLoggingScreen(self):
        self.clear()

        self.printText(30,0,"Rally-logger")
        self.printText(15, 30, "Start logging")
        self.update()

    def welcomeScreen(self):
        self.clear()
        self.printCenter("Rally-logger")
        self.update()

    def drawFrame(self):

        now = datetime.now()
        dt_string = now.strftime("%H:%M")

        self.clear()
        self.draw.line((0, 15, self.display.width, 15), fill=0)

        self.printText(0,0,"Rally-logger")
        self.printText(self.display.width - self.draw.textlength(dt_string, self.font) - 3, 0, dt_string)

    def drawActions(self, action1, action2, action3, selected=0):
        menuWidth = max([
            self.draw.textlength(action1, self.font),
            self.draw.textlength(action2, self.font),
            self.draw.textlength(action3, self.font)
        ])
        lineOffset = 6
        self.draw.line((self.display.width - menuWidth - lineOffset, 15, self.display.width - menuWidth - lineOffset, self.display.height), fill=0)
        
        self.printText(self.display.width - menuWidth, 20, action1)
        if (selected == 1):
            self.draw.line((self.display.width - menuWidth, 32, self.display.width - lineOffset, 32), fill=0)

        self.printText(self.display.width - menuWidth, 35, action2)
        if (selected == 2):
            self.draw.line((self.display.width - menuWidth, 47, self.display.width - lineOffset, 47), fill=0)

        self.printText(self.display.width - menuWidth, 50, action3)
        if (selected == 3):
            self.draw.line((self.display.width - menuWidth, 62, self.display.width - lineOffset, 62), fill=0)


    def mainMenu(self):
        self.drawFrame()
        self.drawActions("PWR", "START", "STOP")
        
        self.update()

    def progressBar(self, percent = 0, x = 10, y = 35, width = 70, height = 10):
        value = min([max([0,percent]), 100])
        self.draw.rectangle((x,y,x + width,y + height))
        self.draw.rectangle((x,y,((width * (value / 100) + x )),(y + height)), fill=0)

    def buttonPressOverlay(self, text, percent):
        marginX = 10
        marginY = 15
        self.draw.rectangle([marginX,marginY,self.display.width - marginX, self.display.height - marginY], "WHITE")
        self.progressBar(percent, (self.display.width /2) - 35, (self.display.height / 2) - 10)
        self.printCenter(text, 5)

    def fullScreenMonit(self, text):
        self.clear()
        self.printCenter(text, -15)
        self.update()

    def timeUpdated(self):
        self.clear()
        now = datetime.now()
        dt_string = now.strftime("%H:%M")

        self.printCenter("Time Updated", -12)
        self.printCenter(dt_string)
        self.update()
