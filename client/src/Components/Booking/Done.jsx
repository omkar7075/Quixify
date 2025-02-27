import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Booking/Pagination';
import FooterSection from '../FooterSection/FooterSection';

export default function Done() {
  const [refId, setRefId] = useState('');

  useEffect(() => {
    const generateRefId = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    };

    setRefId(generateRefId());
  }, []);

  return (
    <>
      <Pagination />
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="w-5/6 h-5/6 text-center bg-white border-2 border-gray-300 rounded-lg shadow-xl shadow-zinc-900">
          <div className="text-6xl text-blue-500 mt-10">&#10004;</div>
          <h1 className="text-2xl mt-8 mb-4">SUCCESS!</h1>
          <p className="text-lg mb-2">You have successfully booked the service.</p>
          <p className="text-lg mb-6">Your Ref. ID: {refId}</p>
          <Link to='/'>
            <button className="buttonGradient sm:text-lg sm:p-3 text-base p-2 rounded-md">Back To Home</button>
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
