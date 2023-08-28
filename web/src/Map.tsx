import { Map as LeafLetMap, icon } from "leaflet";
import React, { FC, useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
} from "react-leaflet";
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import "./Map.css";

const PinIcon = icon({
    iconUrl: 'https://www.svgrepo.com/show/143359/car-placeholder.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
});

const limeOptions = { color: "lime" };

interface Props {
  points: {[ky:string]:any}[]
  position?: number
}

const extractCords = (data: {[key:string]:any}): [number, number] => [data.lat || 0, data.lon || 0]

export const Map: FC<Props> = ({ points, position }) => {
    const [map, setMap] = useState<LeafLetMap | null >(null)
    
    const parsed = useMemo(() => points
    .map(extractCords), [points])

  useEffect(() => {
    if (!map || parsed.length < 1) {
        return;
    }
    
    parsed[position || 0] && map.setView(parsed[position || 0])

  }, [parsed, map, position])

  return (
    <MapContainer
      center={parsed[0] || [50,21]}
      zoom={10}
      className="map"
      ref={setMap}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parsed.length > 0 && <>
        <Polyline pathOptions={limeOptions} positions={parsed}/>
        <ReactLeafletDriftMarker
            // if position changes, marker will drift its way to new position
            position={parsed[position || 0] || parsed[0]}
            // time in ms that marker will take to reach its destination
            duration={1}
            icon={PinIcon}
        >
            <Popup>
                <h5>{new Date(points[position || 0].time).toLocaleString()}</h5>
                <h4>{Math.round(points[position || 0].speed)} km/h</h4>
            </Popup>
        </ReactLeafletDriftMarker>
      </>}
    </MapContainer>
  );
};
