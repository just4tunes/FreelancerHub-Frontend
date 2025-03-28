import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Cmap = () => {
  return (
    <div className="w-full h-[60vh]  rounded-lg overflow-hidden">
      <MapContainer
        center={[4.8242, 7.0336]} // Port Harcourt Coordinates
        zoom={13}
        className="w-full h-full" // Ensures full width and height inside the div
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Free OpenStreetMap tiles
        />
        <Marker position={[4.8242, 7.0336]}>
          <Popup>Port Harcourt, Nigeria</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Cmap;


