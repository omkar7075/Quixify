import React from 'react';
import '../Booking/Pagination.css';

export default function Pagination({ page }) {
  return (
    <div className="sm:p-6 py-6 px-1 mt-[18%] sm:max-lg:mt-[10.5%] lg:mt-[8%] xl:mt-[5.5%]  contactGradient flex items-center mb-16">
      <div className={` ${page === 'Service' ? '' : 'completed'} flex items-center`}>
        <span className="step-number sm:text-xl text-lg font-bold bg-gray-300 rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">1</span>
        <span className=" sm:text-lg text-xs ml-2">Service</span>
      </div>
      <div className=" sm:mx-2 mx-1">{'>'}</div>
      <div className={` ${page === 'Date & Time' ? '' : 'completed'} flex items-center`}>
        <span className="step-number sm:text-xl text-lg font-bold bg-gray-300 rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">2</span>
        <span className=" sm:text-lg text-xs ml-2">Date & Time</span>
      </div>
      <div className=" sm:mx-2 mx-1">{'>'}</div>
      <div className={` ${page === 'Information' ? '' : 'completed'} flex items-center`}>
        <span className="step-number sm:text-xl text-lg font-bold bg-gray-300 rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">3</span>
        <span className=" sm:text-lg text-xs ml-2">Information</span>
      </div>
      <div className=" sm:mx-2 mx-1">{'>'}</div>
      <div className={` ${page === 'Confirmation' ? '' : 'completed'} flex items-center`}>
        <span className="step-number sm:text-xl text-lg font-bold bg-gray-300 rounded-full w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">4</span>
        <span className=" sm:text-lg text-xs ml-2">Confirmation</span>
      </div>
    </div>
  );
}
