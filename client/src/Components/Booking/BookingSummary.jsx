import React from 'react';
import Conformation from '../../assets/Confirmation.png';
import Pagination from './Pagination';
import { Link, useLocation } from 'react-router-dom';
import FooterSection from '../FooterSection/FooterSection';

const BookingSummary = () => {
  const location = useLocation();
  const { service, city, landmark, address, selectedDate, selectedTime, name, email, phone, orderNote } = location.state || {};

  return (
    <>
      <Pagination page='Confirmation' />
      <div className="xl:w-9/12 lg:w-10/12 sm:w-11/12 w-11/12 mx-auto my-5 p-5 mb-10 bg-white rounded-lg font-sans shadow-xl shadow-zinc-900">
        <div className="flex items-center mb-6">
          <img src={Conformation} alt="Profile" className="w-24 h-24 rounded-full object-cover mr-5" />
          <div className="flex-1">
            <div className='flex items-center justify-between mb-2'>
              <h2 className="sm:text-xl text-lg font-bold text-gray-800">Supriya</h2>
              <div className="flex items-center sm:text-lg text-base">
                <span className="text-yellow-500 mr-1">★</span>4.9(5.0)
              </div>
            </div>
            <p className="text-gray-700 sm:text-base text-sm">
              Supriya: Dedicated and experienced individual offering top-quality professional cleaning services in Waghodia and surrounding areas. Passionate about cleanliness, with keen attention to detail. Tailors services to meet each client's specific needs.
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-between mb-6">
          <div className="flex-1 p-10 mx-2 sm:mb-0 mb-5 bg-green-100 border-2 border-black rounded-lg shadow-inner h-[250px] md:max-lg:p-5 ">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-700">{address}, {landmark}, {city}</p>
          </div>
          <div className="flex-1 p-10 mx-2 sm:mb-0 mb-5 bg-orange-100 border-2 border-black rounded-lg shadow-inner h-[250px] md:max-lg:p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Date & Time</h3>
            <p className="text-gray-700">
              {selectedDate?.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
              <br />
              {selectedTime}
            </p>
          </div>
          <div className="flex-1 p-6 mx-2 bg-gray-100 rounded-lg shadow-inner">
            <h3 className="text-lg font-bold text-gray-800 mb-2 ">Booking Summary</h3>
            <div className="mb-4">
              <h4 className="font-semibold mb-1 ">Appointment Service</h4>
              <p className="flex justify-between mb-1">Bath Room x 1<span>₹ 250</span></p>
              <p className="flex justify-between mb-1">Kitchen Room x 1<span>₹ 200</span></p>
              <hr className="my-2" />
              <p className="flex justify-between font-semibold">Appointment Fee<span>₹ 450</span></p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Extra Service</h4>
              <p className="flex justify-between mb-1">Appliances Cleaning x 1<span>₹ 200</span></p>
              <p className="flex justify-between mb-1">Sanitization of Toilets x 1<span>₹ 300</span></p>
              <hr className="my-2" />
              <p className="flex justify-between font-semibold">Extra Fee<span>₹ 500</span></p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg text-gray-800">
              <p>Total<span>₹ 950</span></p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Booking Information</h3>
          <p className="text-gray-700"><strong>Name:</strong> {name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {phone}</p>
          <p className="text-gray-700"><strong>City:</strong> {city}</p>
          <p className="text-gray-700"><strong>Area:</strong> {landmark}</p>
          <p className="text-gray-700"><strong>Address:</strong> {address}</p>
          <p className="text-gray-700"><strong>Order Note:</strong> {orderNote}</p>
        </div>

        <div className="flex justify-between">
          <Link to='/Information'>
            <button className="buttonGradient sm:text-lg sm:p-3 text-base p-2 rounded-md">Previous</button>
          </Link>
          <Link to='/Done'>
            <button className="buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">Submit</button>
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default BookingSummary;
