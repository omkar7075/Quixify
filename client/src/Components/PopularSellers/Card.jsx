import React from 'react';

const Card = ({ image, service, rating, price, distance, city, landmark, address }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={service} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{service}</h3>
      <p className="text-gray-600 mb-2">Rating: {rating}</p>
      <p className="text-gray-600 mb-2">Price: ₹{price}</p>
      {distance && <p className="text-gray-600 mb-2">Distance: {distance} km</p>}
      {city && <p className="text-gray-600 mb-2">City: {city}</p>}
      {landmark && <p className="text-gray-600 mb-2">Landmark: {landmark}</p>}
      {address && <p className="text-gray-600 mb-2">Address: {address}</p>}
    </div>
  );
};

export default Card;