import React, { FC, useState } from "react";
import { Map } from "./Map";
import "leaflet/dist/leaflet.css"
import './App.css';
import { Settings } from "./Settings";

const onChangeToValue = (callback) => (event) => callback(parseInt(event.target.value, 10))


export const App: FC = () => {
    const [data, setData] = useState<[number, number][]>([]);
    const [position, setPosition] = useState<number>(0);

    return <div className="map">
        <Settings onLoad={setData} />
        <Map points={data} position={position} />
        <div className="seakBar">
            <button className="seakBar__step" onClick={() => setPosition((curr) => curr - 1)}>{"<"}</button>
            <input 
                type="range" 
                min="0" 
                max={data.length -1 || 0} 
                onChange={onChangeToValue(setPosition)} 
                title="seakBar" 
                className="seakBar__bar"
                value={position}
            />
            <button className="seakBar__step" onClick={() => setPosition((curr) => curr + 1)}>{">"}</button>
        </div>
    </div>
  }