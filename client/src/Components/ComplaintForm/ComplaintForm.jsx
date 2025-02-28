import React, { useState } from 'react';
import axios from 'axios';
import './ComplaintForm.css';
const ComplaintForm = ({ userId, providerId }) => {
  const [complaint, setComplaint] = useState('');

  const submitComplaint = async () => {
    await axios.post('http://localhost:4000/api/v1/complaints/submit', {
      userId,
      providerId,
      complaint,
    });
  };

  return (
    <div className="complaint-form">
      <h2>Submit a Complaint</h2>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Enter your complaint"
      />
      <button onClick={submitComplaint}>Submit Complaint</button>
    </div>
  );
};

export default ComplaintForm;