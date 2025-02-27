import { useState } from 'react';
import axios from 'axios';
import './FareCalculator.css';

const FareCalculator = () => {
  const [fare, setFare] = useState(null);

  const calculateFare = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/fare/calculate', {
        distance: 10,
        time: 'peak',
        weather: 'rain',
      });
      setFare(response.data.totalFare);
    } catch (error) {
      console.error('Error calculating fare:', error);
    }
  };

  return (
    <div className="fare-container">
      <button onClick={calculateFare}>Calculate Fare</button>
      {fare && <p>Total Fare: ₹{fare}</p>}
    </div>
  );
};

export default FareCalculator;
