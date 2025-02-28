import React, { useState } from 'react';
import axios from 'axios';
import './ServiceLog.css';
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
    <div className="service-log">
      <h2>Service Log</h2>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Enter status"
      />
      <button onClick={updateLog}>Update Log</button>
    </div>
  );
};

export default ServiceLog;