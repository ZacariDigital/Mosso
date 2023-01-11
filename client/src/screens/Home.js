import React from 'react';
import{
    MapContainer,
    TileLayer,
    Marker
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [50.374428593134546, -4.138374685630398];

const Home = () =>{
    return(
        <MapContainer
        center = {center}
        zoom={10}
        style={{width:'100vw', height:'100vw'}}
        >
            <TileLayer
            url="https://api.maptiler.com/maps/toner-v2/256/{z}/{x}/{y}.png?key=TCgSFQwZ9xLlJlM6Kazk"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            
            
            >
            </TileLayer>

        </MapContainer>
        
        
        
    )
}

export default Home