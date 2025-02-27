import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Seller_Invitation from '../Seller_Invitation/Seller_Invitation';
import WhyUs from '../WhyUs/WhyUs';
import FooterSection from '../FooterSection/FooterSection';
import './ContactUs.css'; // Include any additional custom CSS

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const contectsave = async () => {
    console.warn(name, email, phone, address, comment);
    setLoading(true);
    try{
      if (!name || !email || !phone || !address || !comment) {
      setLoading(false);
      toast.error("All Fields Are Required");
      return;
    }
    let result = await fetch('http://localhost:4000/api/v1/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, address, comment }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();
    setLoading(false);
    toast.success("Contact Form Sent Successfully");
    console.warn(result);
    navigate("/");
    }
    catch(erorr){
      setLoading(false);
      toast.error(erorr.message);
    }
    
  };

  return (
    <>
      <div className="contactGradient sm:p-5 p-3 text-left mt-[19%] xl:mt-[5.4%] sm:mt-[10%] lg:mt-[6.5%]">
        <nav className="text-base mb-3 lg:ml-14 sm:ml-4 font-bold">
          <Link to="/" className="text-black no-underline mx-1">Home</Link> |
          <Link to="/Contact" className="text-black no-underline mx-1">Contact</Link>
        </nav>
        <h1 className="lg:text-4xl sm:text-3xl text-3xl font-bold text-black sm:ml-4 lg:ml-12">Contact Us</h1>
      </div>
      <div className="flex lg:gap-10 sm:gap-6 w-full sm:8/12 xl:w-10/12 lg:w-11/12 mx-auto justify-around py-5 mt-18">
        <div className="bg-[#e0e7ff] rounded-lg sm:p-5 p-2 text-center w-[27%] h-48 sm:w-1/4 sm:h-56">
          <div className="text-4xl sm:w-20 sm:h-20 w-14 h-14 text-white bg-red-400 rounded-full sm:p-4 sm:mb-2 p-1 inline-block">
            <i className="fas fa-phone"></i>
          </div>
          <h2 className="sm:text-lg text-base mt-2 mb-2">Call Us</h2>
          <p className="text-gray-500 sm:text-lg text-xs sm:font-normal font-extrabold ">9316455818</p>
        </div>
        <div className="bg-[#e0e7ff] rounded-lg sm:p-5 p-2 text-center w-[31%] h-48 sm:w-1/4 sm:h-56">
          <div className="text-4xl sm:w-20 sm:h-20 w-14 h-14 text-white bg-green-500 rounded-full sm:p-4 sm:mb-2 p-1 inline-block">
            <i className="fas fa-envelope"></i>
          </div>
          <h2 className="sm:text-lg text-base mt-2 mb-2">Mail Address</h2>
          <p className="text-gray-500 sm:text-lg text-xs sm:font-normal font-extrabold ">Contact@mail.com</p>
          <p className="text-gray-500 sm:text-lg text-xs sm:font-normal font-extrabold ">Support@mail.com</p>
        </div>
        <div className="bg-[#e0e7ff] rounded-lg sm:p-5 p-2 text-center w-[30%] h-48 sm:w-1/4 sm:h-56">
          <div className="text-4xl sm:w-20 sm:h-20 w-14 h-14 text-white bg-blue-400 rounded-full sm:p-4 sm:mb-2 p-1 inline-block">
            <i className="fas fa-headset"></i>
          </div>
          <h2 className="sm:text-lg text-base mt-2 mb-2">Support Time</h2>
          <p className="text-gray-500 sm:text-lg text-xs sm:font-normal font-extrabold ">08.00am to 11.00pm</p>
          <p className="text-gray-500 sm:text-lg text-xs sm:font-normal font-extrabold ">Monday to Saturday</p>
        </div>
      </div>
      <div className="xl:w-9/12 lg:w-10/12 sm:w-11/12 w-11/12 mx-auto py-5">
        <h2 className="sm:text-4xl text-3xl font-extrabold mb-5 border-b-2 border-red-400 inline-block pb-2">Get In Touch</h2>
        <form className="flex flex-wrap justify-between">
          <div className="lg:w-[48%] w-11/12 mb-5">
            <label className="block sm:font-bold mb-2 sm:text-xl text-lg font-extrabold">Your Name</label>
            <input type="text" placeholder="Type Name" value={name}
              onChange={(e) => setName(e.target.value)} className="w-full h-14 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="lg:w-[48%] w-11/12 mb-5">
            <label className="block sm:font-bold mb-2 sm:text-xl text-lg font-extrabold">Email Address</label>
            <input type="email" placeholder="Type Email" value={email}
              onChange={(e) => setEmail(e.target.value)} className="w-full h-14 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="lg:w-[48%] w-11/12 mb-5">
            <label className="block sm:font-bold mb-2 sm:text-xl text-lg font-extrabold">Phone Number</label>
            <input type="text" placeholder="Type Number" value={phone}
              onChange={(e) => setPhone(e.target.value)} className="w-full h-14 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="lg:w-[48%] w-11/12 mb-5">
            <label className="block sm:font-bold mb-2 sm:text-xl text-lg font-extrabold">Address</label>
            <input type="text" placeholder="Type Address" value={address}
              onChange={(e) => setAddress(e.target.value)} className="w-full h-14 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="w-full mb-5">
            <label className="block sm:font-bold mb-2 sm:text-xl text-lg font-extrabold">Comments</label>
            <textarea placeholder="Post Comments" value={comment}
              onChange={(e) => setComment(e.target.value)} className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-vertical"></textarea>
          </div>
        </form>
        <button onClick={contectsave} type="submit"
          disabled={loading} className="xl:w-1/5 bg-green-500 text-white border-none cursor-pointer text-lg font-medium leading-8 outline-none rounded-lg py-3 px-9 mt-5 transition-all duration-300 hover:bg-green-700">
          {loading ? (
            <span className="w-7 h-7 border-4 border-white border-b-transparent rounded-full inline-block box-border animate-spin"></span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
      <WhyUs />
      <Seller_Invitation />
      <FooterSection />
    </>
  );
}

export default ContactUs;
  