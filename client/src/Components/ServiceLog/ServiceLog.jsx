import React, { useState } from 'react';
import axios from 'axios';

const ServiceLog = ({ providerId, serviceId }) => {
  const [status, setStatus] = useState('');

  const updateLog = async () => {
    await axios.put('http://localhost:4000/api/v1/providers/service-log', {
      providerId,
      serviceId,
      status,
    });
  };

  return (
    <div>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      <button onClick={updateLog}>Update Log</button>
    </div>
  );
};

export default ServiceLog;