import React, { useState } from "react";
import "./PartnerSignUp.css";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import FooterSection from '../FooterSection/FooterSection'
const BasicInfo = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLandmark, setSelectedLandmark] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategoriesWithPrices, setSubcategoriesWithPrices] = useState([]);

  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const minDate = new Date(
    today.getFullYear() - 60,
    today.getMonth(),
    today.getDate()
  );

  // Function to handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedLandmark("");
  };

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSubcategoriesWithPrices([]);
  };

  // Function to handle adding a new subcategory with price
  const addSubcategoryWithPrice = () => {
    setSubcategoriesWithPrices([
      ...subcategoriesWithPrices,
      { subcategory: "", price: "" },
    ]);
  };

  // Function to handle subcategory change
  const handleSubcategoryChange = (index, subcategory) => {
    const updatedSubcategories = subcategoriesWithPrices.map((item, i) =>
      i === index ? { ...item, subcategory } : item
    );
    setSubcategoriesWithPrices(updatedSubcategories);
  };

  // Function to handle price change
  const handlePriceChange = (index, price) => {
    const updatedSubcategories = subcategoriesWithPrices.map((item, i) =>
      i === index ? { ...item, price } : item
    );
    setSubcategoriesWithPrices(updatedSubcategories);
  };

  const cities = ['Vadodara', 'Ahmedabad', 'Delhi', 'Mumbai'];
  const landmarks = {
    Vadodara: ['Akota', 'AlkaPuri', 'Gotri', 'Manjalpur', 'Waghodia'],
    Ahmedabad: ['Mandir Road', 'Vastrapur', 'Maninagar'],
    Delhi: ['Connaught Place', 'Chandni Chowk', 'Greater Noida'],
    Mumbai: ['Bandra', 'Nariman Point', 'Marine Drive'],
  };

  const categories = {
    Cleaning: ['FullHomeClean', 'KitchenBathroomClean', 'BedroomClean', 'ApplianceClean'],
    Plumber: ['LeakFixing', 'PipeInstallation', 'TapReplacement'],
    OutdoorHelp: ['Gardening', 'SnowRemoval', 'LawnMowing'],
    Electrician: ['Wiring', 'LightingInstallation', 'FanRepair'],
  };

  return (
    <>
    <form className="mx-auto lg:w-9/12 xl:mt-[10%] lg:mt-[14%] sm:w-10/12 sm:mt-[18%] p-5 mb-10 w-11/12 mt-[25%] bg-[#fff] rounded-lg shadow-xl shadow-zinc-900">
      <h1 className=" sm:text-2xl text-xl text-center mb-5 font-bold">Unlock Your Potential: Become a Quixify Partner Today!</h1>
      <div className="flex mb-5 justify-between">
        <div className=" sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-700 font-bold">1 Basic info</div>
        <div className="sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-200 ">2 Contact Info</div>
        <div className="sm:text-lg text-base flex-1 text-center p-3 border-b-2 border-solid border-slate-200">3 Login info</div>
      </div>
      <div className=" sm:text-xl text-lg mb-3 font-bold">Basic info</div>
      <p className=" sm:text-base text-sm mb-5 text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <div className=" mb-4">
        <label className=" block mb-1 ">First name</label>
        <input type="text" required className=" p-2 mr-3 border-solid border-2 border-slate-700 rounded-md w-11/12"/>
      </div>
      <div className="mb-4">
        <label className=" block mb-1">Last name</label>
        <input type="text" required className="w-11/12 p-2 mr-3 border-solid border-2 border-slate-700 rounded-md" />
      </div>
      <div
        className="mb-4 flex items-center w-11/12"
      >
        <div className=" w-2/4">
          <label className=" block mb-1">What's your gender?</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className=" p-2 mr-1 border-solid border-2 border-slate-700 rounded-md"
              required
            />
            <label htmlFor="female" className=" block mb-1">Female</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              style={{ margin: "0px 5px" }}
              className=" p-2 mr-3 border-solid border-2 border-slate-700 rounded-md"
              required
            />
            <label htmlFor="male" className=" block mb-1">Male</label>
          </div>
        </div>
        <div>
          <label className=" block mb-1">What's your date of birth?*</label>
          <DatePicker
            onChange={setDateOfBirth}
            value={dateOfBirth}
            maxDate={maxDate}
            minDate={minDate}
            required
          />
        </div>
      </div>

      <div className="flex w-11/12">
        <div className="mb-4 w-3/6">
          <label className=" block mb-1">City</label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-2 mr-3 border-solid border-2 border-slate-700 rounded-md"
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 w-3/6 ml-3">
          <label className=" block mb-1">Landmark</label>
          <select
            value={selectedLandmark}
            onChange={(e) => setSelectedLandmark(e.target.value)}
            className="w-full p-2 mr-3 border-solid border-2 border-slate-700 rounded-md"
            required
          >
            <option value="">Select Landmark</option>
            {selectedCity &&
              landmarks[selectedCity].map((landmark) => (
                <option key={landmark} value={landmark}>
                  {landmark}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className=" sm:text-xl text-lg mb-3 font-bold">Service Info</div>
      <div className="mb-4 w-11/12" >
        <label className=" block mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 mr-3 border-solid border-2 border-slate-700 rounded-md"
          required
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {subcategoriesWithPrices.map((item, index) => (
        <div key={index} className="flex text-center w-11/12">
          <div className="mb-4 w-1/2">
            <label className=" block mb-1">Subcategory</label>
            <select
              value={item.subcategory}
              onChange={(e) => handleSubcategoryChange(index, e.target.value)}
              className="w-full p-2 mr-3 border-solid border-2 border-slate-700 rounded-md"
              required
            >
              <option value="">Select Subcategory</option>
              {selectedCategory &&
                categories[selectedCategory].map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-4 w-1/2 ml-3">
            <label className=" block mb-1">Price</label>
            <input
              type="number"
              value={item.price}
              onChange={(e) => handlePriceChange(index, e.target.value)}
              className="w-full p-1 mr-3 border-solid border-2 border-slate-700 rounded-md"
              required
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={addSubcategoryWithPrice} className=" sm:p-2 mb-5 bg-orange-300 border-none rounded-md sm:text-xl text-lg p-1 cursor-pointer">
        Add Subcategory
      </button>
      <Link to="/PartnerSignUp/BasicInfo/ContactInfo">
        <button type="submit" className=" w-full buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">
          Next
        </button>
      </Link>
    </form>
    <FooterSection/>
    </>
  );
};

export default BasicInfo;