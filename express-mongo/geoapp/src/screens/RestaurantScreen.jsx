import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useEffect, useState } from "react";
import axios from "axios";

const RestaurantScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/restaurants").then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <MapContainer center={[47.9148155, 106.9108148]} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => {
        const { coordinates } = item.location;
        return (
          <Marker key={item._id} position={[coordinates[1], coordinates[0]]}>
            <Popup>{item.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default RestaurantScreen;
