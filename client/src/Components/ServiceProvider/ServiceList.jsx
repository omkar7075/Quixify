import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await axios.get('http://localhost:4000/api/providers/nearby?longitude=77.1025&latitude=28.7041&maxDistance=10000');
      setProviders(res.data);
    };
    fetchProviders();
  }, []);

  return (
    <div>
      <h2>Nearby Service Providers</h2>
      <ul>
        {providers.map((provider) => (
          <li key={provider._id}>{provider.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;