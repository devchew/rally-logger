import React, { FC, useEffect, useRef, useState } from "react";
import { Map } from "./Map";
import "leaflet/dist/leaflet.css"
import './App.css';
import { Settings } from "./Settings";

const onChangeToValue = (callback) => (event) => callback(parseInt(event.target.value, 10))


export const App: FC = () => {
    const [data, setData] = useState<{[ky:string]:any}[]>([]);
    const [position, setPosition] = useState<number>(0);
    const [playStsate, setPlayState] = useState<boolean>(false);

    const interval = useRef<number>();

    const increment = () => setPosition((curr) => curr + 1)
    const decrement = () => setPosition((curr) => curr - 1)

    const play = () => {
        if (!playStsate || position > data.length - 1) {
            setPlayState(false);
            return;
        }
        const delay = position === 0 ? 0 : data[position].time - data[position - 1].time
        console.log(position, delay / 100);
        setTimeout(increment, delay / 100)
    }

    useEffect(play, [playStsate, position])

    const tooglePlay = () => {
        setPlayState(!playStsate);
    }

    return <div className="map">
        <Settings onLoad={setData} />
        <Map points={data} position={position} />
        <div className="seakBar">
            <button 
                className="seakBar__step" 
                onClick={decrement}
                onMouseDown={() => interval.current = setInterval(decrement, 100)}
                onMouseUp={() => clearInterval(interval.current)}
            >{"<"}</button>
            <input 
                type="range" 
                min="0" 
                max={data.length -1 || 0} 
                onChange={onChangeToValue(setPosition)} 
                title="seakBar" 
                className="seakBar__bar"
                value={position}
            />
            <button 
                className="seakBar__step" 
                onClick={increment} 
                onMouseDown={() => interval.current = setInterval(increment, 100)}
                onMouseUp={() => clearInterval(interval.current)}
            >{">"}</button>
            <button onClick={tooglePlay}>{playStsate ? "stop" : "play"}</button>
        </div>
    </div>
  }