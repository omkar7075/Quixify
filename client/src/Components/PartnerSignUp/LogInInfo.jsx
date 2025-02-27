import React from 'react';
import FooterSection from '../FooterSection/FooterSection';

const LogInInfo = () => {
  const submitForm = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <form className="mx-auto lg:w-9/12 xl:mt-[10%] lg:mt-[14%] sm:w-10/12 sm:mt-[18%] p-5 mb-10 w-11/12 mt-[25%] bg-[#fff] rounded-lg shadow-xl shadow-zinc-900" onSubmit={submitForm}>
        <h1 className="sm:text-2xl text-xl text-center mb-5 font-bold">
          Unlock Your Potential: Become a Quixify Partner Today!
        </h1>
        <div className="flex mb-5 justify-between">
          <div className="sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-200">1 Basic info</div>
          <div className="sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-200">2 Contact Info</div>
          <div className="sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-700 font-bold">3 Login info</div>
        </div>
        <div className="sm:text-xl text-lg mb-3 font-bold">Set Password</div>
        <p className="sm:text-base text-sm mb-5 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <div className="mb-4">
          <label className="block mb-1">OTP Sent To Email</label>
          <input type="text" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input type="password" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirm Password</label>
          <input type="password" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
        </div>
        <button type="submit" className="w-full buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">
          Sign Up
        </button>
      </form>
      <FooterSection />
    </>
  );
};

export default LogInInfo;
