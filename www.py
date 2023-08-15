from flask import Flask
import socket   
from db import DatabaseManager

app = Flask(__name__, static_folder='public', static_url_path="/public")
db = DatabaseManager()


@app.route("/api/gps")
def allGPS():
    oneHourInMs = 3600000
    return db.get_gps(db.getTimestamp() - oneHourInMs, db.getTimestamp())

@app.route("/api/gps/<startDate>")
def fromGPS(startDate):
    return db.get_gps(startDate, db.getTimestamp())

@app.route("/api/gps/<startDate>/<endDate>")
def rangeGPS(startDate, endDate):
    return db.get_gps(startDate, endDate)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")

def getAddress():
    hostname=socket.gethostname()   
    IPAddr=socket.gethostbyname(hostname)   
    return {"hostname": hostname, "ip": IPAddr}

def web():
    app.run(debug=True, use_reloader=False, host='0.0.0.0', port=80)