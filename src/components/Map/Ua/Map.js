import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../../../css/App.css';
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
class MapComponent extends React.Component {
    state = {
        lat: 49.978834,
        lng: 36.291217,
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
                    <Popup>Ми тут</Popup>
                </Marker>
            </MapContainer>
        );
    }
};

export default MapComponent;