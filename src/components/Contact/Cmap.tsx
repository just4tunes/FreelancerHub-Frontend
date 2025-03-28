import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
/

const Cmap = () => {
  const mapCenter: [number, number] = [4.8242, 7.0336]; // Port Harcourt Coordinates
  const mapZoom: number = 13;

  return (
    <div className="w-full h-[60vh] rounded-lg overflow-hidden">
      <MapContainer center={mapCenter} zoom={mapZoom} className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={mapCenter}>
          <Popup>Port Harcourt, Nigeria</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Cmap;








