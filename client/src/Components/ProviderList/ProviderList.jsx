import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await axios.get('http://localhost:4000/api/v1/providers/rating?minRating=4');
      setProviders(response.data);
    };

    fetchProviders();
  }, []);

  return (
    <div>
      <h2>Top Rated Providers</h2>
      <ul>
        {providers.map((provider) => (
          <li key={provider._id}>{provider.name} - Rating: {provider.rating}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderList;