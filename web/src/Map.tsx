import { Map as LeafLetMap, icon } from "leaflet";
import React, { FC, useEffect, useState } from "react";
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
  points: [number, number][]
  position?: number
}

export const Map: FC<Props> = ({ points, position }) => {
    const [map, setMap] = useState<LeafLetMap | null >(null)

  useEffect(() => {
    if (!map || points.length < 1) {
        return;
    }
    points[position || 0] && map.setView(points[position || 0])

  }, [points, map, position])


  return (
    <MapContainer
      center={points[0] || [50,21]}
      zoom={10}
      className="map"
      ref={setMap}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.length > 0 && <>
        <Polyline pathOptions={limeOptions} positions={points}/>
        <ReactLeafletDriftMarker
            // if position changes, marker will drift its way to new position
            position={points[position || 0] || points[0]}
            // time in ms that marker will take to reach its destination
            duration={1}
            icon={PinIcon}
        >
            <Popup>Hi this is a popup</Popup>
        </ReactLeafletDriftMarker>
      </>}
    </MapContainer>
  );
};
