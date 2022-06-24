from flask import Flask 

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


app = Flask(__name__)
# @app.route("/")
@app.route("/members")
def members():
    return {"members":["m1",'m2','m3']} 

@app.route('/')
def index():
    return 'Index Page'

@app.route('/daily_mean_speed')
def daily_mean_speed():
    return 'daily mean speed'

@app.route('/data_time')
def data_time():
    return 'data_time'

@app.route('/speed')
def speed():
    return 'Speed'

@app.route('/lo_la')
def lo_la():
    return fun()


def fun():
    birddata = pd.read_csv("bird_tracking.csv")
    bird_names = pd.unique(birddata.bird_name)
    ix = birddata.bird_name == "Eric"
    x,y = birddata.longitude[ix], birddata.latitude[ix]
    plt.figure(figsize = (7,7))
    plt.plot(x,y,"b.")
    plt.figure(figsize = (7,7))
    for bird_name in bird_names:
        ix = birddata.bird_name == bird_name  #storing the indices of the bird Eric
        x,y = birddata.longitude[ix], birddata.latitude[ix]
        plt.plot(x,y,".", label=bird_name)

    plt.xlabel("Longitude")
    plt.ylabel("Latitude")
    plt.legend(loc="lower right")
    # {'<div>plt.show()</div>'}
    d= plt.show()
    return d
    

    







if __name__ == "__main__":
    app.run(debug=True)    

