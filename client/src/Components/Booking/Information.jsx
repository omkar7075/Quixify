import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import FooterSection from '../FooterSection/FooterSection';

export default function Information() {
  const location = useLocation();
  const { service, city, landmark, address, selectedDate, selectedTime } = location.state || {};

  // State variables to manage form field values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderNote, setOrderNote] = useState('');

  return (
    <>
      <Pagination page="Information" />
      <div className="mx-auto lg:w-10/12 w-11/12 sm:w-11/12 xl:w-9/12 p-5 mb-10 bg-white rounded-lg shadow-xl shadow-zinc-900">
        <h2 className="sm:text-2xl text-xl font-bold mb-4">Booking Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Email Here" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="9999999999" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 mb-2">Your City</label>
            <input 
              type="text" 
              id="city" 
              placeholder="Enter City Here" 
              value={city} 
              readOnly 
              className="w-full px-3 py-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="area" className="block text-gray-700 mb-2">Your Area</label>
            <input 
              type="text" 
              id="area" 
              placeholder="Enter Area Here" 
              value={landmark} 
              readOnly 
              className="w-full px-3 py-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">Your Full Address</label>
            <input 
              type="text" 
              id="address" 
              placeholder="Enter Full Address Here" 
              value={address} 
              readOnly 
              className="w-full px-3 py-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="selected-date" className="block text-gray-700 mb-2">Selected Date</label>
            <input 
              type="text" 
              id="selected-date" 
              placeholder="Selected Date" 
              value={selectedDate?.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })} 
              readOnly 
              className="w-full px-3 py-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="selected-time" className="block text-gray-700 mb-2">Selected Time</label>
            <input 
              type="text" 
              id="selected-time" 
              placeholder="Selected Time" 
              value={selectedTime} 
              readOnly 
              className="w-full px-3 py-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="order-note" className="block text-gray-700 mb-2">Order Note</label>
            <textarea 
              id="order-note" 
              placeholder="Order Note" 
              value={orderNote} 
              onChange={(e) => setOrderNote(e.target.value)} 
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <Link to="/Schedule" state={{ service, city, landmark, address, selectedDate, selectedTime }}>
              <button type="button" className="buttonGradient sm:text-lg sm:p-3 text-base p-2 rounded-md">Previous</button>
            </Link>
            <Link to="/BookingSummary"
              state={{ 
                service, 
                city, 
                landmark, 
                address, 
                selectedDate, 
                selectedTime, 
                name, 
                email, 
                phone, 
                orderNote 
            }}>
              <button type="button" className="buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">Next</button>
            </Link>
          </div>
        </form>
      </div>
      <FooterSection />
    </>
  );
}
