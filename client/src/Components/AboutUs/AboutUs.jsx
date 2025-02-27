import React from "react";
import "../AboutUs/AboutUs.css";
import { Link } from "react-router-dom";
import WhyUs from "../WhyUs/WhyUs";
import Seller_Invitation from "../Seller_Invitation/Seller_Invitation";
import About from "../../assets/About.jpg";
import Aboutshape from "../../assets/About-shape.jpg";
import FooterSection from "../FooterSection/FooterSection";
function AboutUs() {
  return (
    <>
      <div className="AboutContainerGradient sm:p-5 p-4 text-left mt-[17%] lg:mt-[6.5%] xl:mt-[5.4%] sm:mt-[10%]">
        <nav className=" text-base mb-3 lg:ml-12 sm:ml-11 ml-2 font-bold">
          <Link to="/">Home</Link> |<Link to="/AboutUs">About</Link>
        </nav>
        <h1 className="sm:text-4xl text-3xl font-bold lg:ml-11 sm:ml-9 ml-1">AboutUs</h1>
      </div>
      <div className=" sm:8/12 xl:w-10/12 lg:w-11/12 w-10/12 mx-auto my-24">
        <div className="flex sm:flex-col flex-col lg:flex-row justify-between">
          <img
            src={Aboutshape}
            alt="About-Shape"
            className="absolute -z-10 top-[30%] xl:left-[5%] lg:left-[0%] sm:left-[10%] left-[1%]"
          />
          <div className=" mx-auto">
            <img src={About} alt="About Us" className="xl:w-full lg:w-11/12" />
          </div>
          <div className=" sm:ml-14 ml-4 xl:w-6/12 lg:w-5/12 sm:w-8/12 md:mx-auto sm:mt-11 mt-8 lg:mt-0">
            <h1 className=" text-2xl font-extrabold lg:text-3xl">
              Know About Us
            </h1>
            <p className=" my-5 mr-11 text-gray-600 sm:text-base lg:text-lg text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <ul className="my-1 space-y-5">
              <li className="list-disc marker:text-[#849ff7]  marker:text-[30px] sm:text-base lg:text-lg text-sm">
                Complete Sanitization and cleaning of bathroom
              </li>
              <li className="list-disc marker:text-[#849ff7]  marker:text-[30px] sm:text-base lg:text-lg text-sm">
                Biodegradable chemicals are used
              </li>
              <li className="list-disc marker:text-[#849ff7]  marker:text-[30px] sm:text-base lg:text-lg text-sm">
                Cleaning Tools will be used to remove deep stains
              </li>
              <li className="list-disc marker:text-[#849ff7]  marker:text-[30px] sm:text-base lg:text-lg text-sm">
                Complete Sanitization and cleaning of bathroom
              </li>
            </ul>
          </div>
        </div>
      </div>
      <WhyUs />
      <Seller_Invitation />
      <FooterSection />
    </>
  );
}

export default AboutUs;
