import React, { useState } from 'react';
import axios from 'axios';
import './FareCalculator.css';

const FareCalculator = () => {
  const [fare, setFare] = useState(null);

  const calculateFare = async () => {
    const response = await axios.post('http://localhost:4000/api/v1/fare/calculate', {
      distance: 10,
      time: 'peak',
      weather: 'rain',
    });
    setFare(response.data.totalFare);
  };

  return (
    <div className="fare-calculator">
      <h2>Dynamic Fare Calculation</h2>
      <button onClick={calculateFare}>Calculate Fare</button>
      {fare && <p>Total Fare: ₹{fare}</p>}
    </div>
  );
};

export default FareCalculator;