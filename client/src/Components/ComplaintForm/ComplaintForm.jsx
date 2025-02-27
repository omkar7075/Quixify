import { useState } from 'react';
import axios from 'axios';
import './ComplaintForm.css';

const ComplaintForm = ({ userId, providerId }) => {
  const [complaint, setComplaint] = useState('');

  const submitComplaint = async () => {
    try {
      await axios.post('http://localhost:4000/api/v1/complaints/submit', {
        userId,
        providerId,
        complaint,
      });
      alert('Complaint submitted successfully');
      setComplaint('');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <div className="complaint-container">
      <textarea value={complaint} onChange={(e) => setComplaint(e.target.value)} placeholder="Describe your complaint..." />
      <button onClick={submitComplaint}>Submit Complaint</button>
    </div>
  );
};

export default ComplaintForm;
