import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import './Heatmap.css';

const Heatmap = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const fetchHeatmapData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/providers/heatmap');
        setHeatmapData(response.data.map(({ _id, count }) => ({ lat: _id[1], lng: _id[0], weight: count })));
      } catch (error) {
        console.error('Error fetching heatmap data:', error);
      }
    };

    fetchHeatmapData();
  }, []);

  return (
    <MapContainer center={[28.7041, 77.1025]} zoom={10} className="heatmap">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HeatmapLayer points={heatmapData} />
    </MapContainer>
  );
};

export default Heatmap;
