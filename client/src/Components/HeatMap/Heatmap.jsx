import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer'; // Correct import
import 'leaflet/dist/leaflet.css';

const Heatmap = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const fetchHeatmapData = async () => {
      const response = await axios.get('http://localhost:4000/api/v1/providers/heatmap');
      setHeatmapData(response.data);
    };

    fetchHeatmapData();
  }, []);

  return (
    <div className="heatmap-container">
      <h2>Service Demand Heatmap</h2>
      <MapContainer center={[28.7041, 77.1025]} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <HeatmapLayer
          points={heatmapData}
          longitudeExtractor={(point) => point[1]}
          latitudeExtractor={(point) => point[0]}
          intensityExtractor={(point) => point[2]} // Adjust based on your data structure
        />
      </MapContainer>
    </div>
  );
};

export default Heatmap;