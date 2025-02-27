import React from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../FooterSection/FooterSection';

const ContactInfo = () => {
  return (
    <>
      <form className="mx-auto lg:w-9/12 xl:mt-[10%] lg:mt-[14%] sm:w-10/12 sm:mt-[18%] p-5 mb-10 w-11/12 mt-[25%] bg-[#fff] rounded-lg shadow-xl shadow-zinc-900">
        <h1 className="sm:text-2xl text-xl text-center mb-5 font-bold">
          Unlock Your Potential: Become a Quixify Partner Today!
        </h1>
        <div className="flex mb-5 justify-between">
          <div className=" sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-200">1 Basic info</div>
          <div className=" sm:text-lg text-base flex-1 text-center py-3 border-b-2 border-solid border-slate-700 font-bold">2 Contact Info</div>
          <div className=" sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-200">3 Login info</div>
        </div>
        <div className=" sm:text-xl text-lg mb-3 font-bold">Contact info</div>
        <p className="sm:text-base text-sm mb-5 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <div className="mb-4">
          <label className="block mb-1">Email ID</label>
          <input type="email" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Alternate Email ID</label>
          <input type="email" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Mobile No.</label>
          <input type="tel" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Alternate Mobile No.</label>
          <input type="tel" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <Link to='/PartnerSignUp/BasicInfo/ContactInfo/LogInInfo'>
          <button type="submit" className="w-full buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">
            Next
          </button>
        </Link>
      </form>
      <FooterSection />
    </>
  );
};

export default ContactInfo;
