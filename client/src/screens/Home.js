import React from 'react';
import{
    MapContainer,
    TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [50.374428593134546, -4.138374685630398];

const Home = () =>{
    return(
        <MapContainer
        center = {center}
        zoom={10}
        style={{width:'100vw', height:'100vw'}}
        
        
        
        />
    )
}

export default Home