import React, { useState } from 'react';
import "../CategoriesSearch/CleaningSearch.css";
import AddressSection from "../AddressSection/AddressSection";
import ApplicanceClean from '../../assets/ApplicanceClean.png';
import BedroomClean from '../../assets/BedroomClean.png';
import KitchenBathroomClean from '../../assets/Kitchen&BathroomClean.png';
import FullHomeClean from '../../assets/FullHomeClean.png';

function CleaningSearch({ onClose }) {
  const [isAddressSectionVisible, setIsAddressSectionVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsAddressSectionVisible(true);
  };
  
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur">
      {!isAddressSectionVisible && (
        <div className=" p-5 rounded-3xl sm:h-96 shadow-2xl bg-slate-50 shadow-black flex xl:w-7/12 lg:w-9/12 sm:w-10/12 w-11/12 flex-col">
          <div className=" relative xl:-top-3 xl:left-[46.5rem] h-8 w-10 sm:text-xl text-lg font-bold cursor-pointer md:left-[35rem] md:-top-2 lg:left-[42rem] lg:-top-2" onClick={onClose}>Close</div>
          <h1 className=" text-black text-center self-center font-bold sm:text-4xl text-2xl textShadow">Cleaning Help</h1>
          <div className=" mt-9 grid sm:grid-cols-4 gap-x-4 gap-y-3 sm:mx-0  grid-cols-2">
            <div className="flex cursor-pointer xl:w-52 lg:w-40 sm:w-36 w-[90%]" onClick={() => handleItemClick('Full Home Clean')}>
              <div className=" rounded-3xl border-black border-solid border-[1px] bg-[#f3f3ff] flex flex-grow flex-col text-base text-black font-bold text-center pt-8 pb-3 ">
                <img
                  loading="lazy"
                  src={FullHomeClean}
                  className=" w-12 self-center m-auto"
                  alt="Full Home Clean"
                />
                <p className=" sm:mt-3 ">Full Home Clean</p>
              </div>
            </div>
            <div className="flex cursor-pointer xl:w-52 lg:w-40 sm:w-36 w-[90%]" onClick={() => handleItemClick('Kitchen & Bathroom Clean')}>
              <div className=" rounded-3xl border-black border-solid border-[1px] bg-[#f3f3ff] flex flex-grow flex-col text-base text-black font-bold text-center pt-8 pb-3 ">
                <img
                  loading="lazy"
                  src={KitchenBathroomClean}
                  className=" w-12 self-center m-auto"
                  alt="Kitchen & Bathroom Clean"
                />
                <p className="sm:mt-3 ">Kitchen & Bathroom Clean</p>
              </div>
            </div>
            <div className="flex cursor-pointer xl:w-52 lg:w-40 sm:w-36 w-[90%]" onClick={() => handleItemClick('Bedroom Clean')}>
              <div className=" rounded-3xl border-black border-solid border-[1px] bg-[#f3f3ff] flex flex-grow flex-col text-base text-black font-bold text-center pt-8 pb-3 ">
                <img
                  loading="lazy"
                  src={BedroomClean}
                  className=" w-12 self-center m-auto"
                  alt="Bedroom Clean"
                />
                <p className="sm:mt-3">Bedroom Clean</p>
              </div>
            </div>
            <div className="flex cursor-pointer xl:w-52 lg:w-40 sm:w-36 w-[90%]" onClick={() => handleItemClick('Appliance Clean')}>
              <div className=" rounded-3xl border-black border-solid border-[1px] bg-[#f3f3ff] flex flex-grow flex-col text-base text-black font-bold text-center pt-8 pb-3 ">
                <img
                  loading="lazy"
                  src={ApplicanceClean}
                  className=" w-12 self-center m-auto"
                  alt="Appliance Clean"
                />
                <p className="sm:mt-3">Appliance Clean</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAddressSectionVisible && (
        <AddressSection onClose={() => setIsAddressSectionVisible(false)} Title={selectedItem}/>
      )}
    </div>
  );
}

export default CleaningSearch;