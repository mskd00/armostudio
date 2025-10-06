'use client'; // این کامپوننت باید client-side باشد

import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const position = [35.7219, 51.3347];


    return (
        <div className="h-[400px] w-full rounded-lg overflow-hidden border border-gray-200">
            <MapContainer
                // @ts-ignore
                center={position}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default Map;