import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../App.css';
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
class MapComponent extends React.Component {
    state = {
        lat: 50.508622,
        lng: 30.449330,
        zoom: 15
    };

    render() {
        var center = [this.state.lat, this.state.lng];
        return (
            <MapContainer className={'map'} zoom={this.state.zoom} center={center}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={center}>
                    <Popup>Пидарас</Popup>
                </Marker>
            </MapContainer>
        );
    }
};

export default MapComponent;