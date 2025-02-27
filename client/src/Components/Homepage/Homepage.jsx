import React, { useState } from 'react';
import Banner from '../../assets/banner.png';
import CleaningSearch from '../CategoriesSearch/CleaningSearch';
import PlumberSearch from '../CategoriesSearch/PlumberSearch';

const HomePage = () => {
    const [isCleaningSearchVisible, setIsCleaningSearchVisible] = useState(false);
    const [isPlumberSearchVisible, setIsPlumberSearchVisible] = useState(false);
    const [isOutdoorHelpSearchVisible, setIsOutdoorHelpSearchVisible] = useState(false);
    const [isElectricianSearchVisible, setIsElectricianSearchVisible] = useState(false);

    const toggleCleaningSearch = () => setIsCleaningSearchVisible(!isCleaningSearchVisible);
    const togglePlumberSearch = () => setIsPlumberSearchVisible(!isPlumberSearchVisible);
    const toggleOutdoorHelpSearch = () => setIsOutdoorHelpSearchVisible(!isOutdoorHelpSearchVisible);
    const toggleElectricianSearch = () => setIsElectricianSearchVisible(!isElectricianSearchVisible);

    const closeCleaningSearch = () => setIsCleaningSearchVisible(false);
    const closePlumberSearch = () => setIsPlumberSearchVisible(false);
    const closeOutdoorHelpSearch = () => setIsOutdoorHelpSearchVisible(false);
    const closeElectricianSearch = () => setIsElectricianSearchVisible(false);

    return (
        <div className="relative z-1 pt-24 overflow-hidden w-screen customGradient">
            <div className="max-w-screen-2xl px-4 mx-auto w-11/12 xl:w-11/12 lg:w-full  md:max-lg:w-full sm:w-full">
                <div className="flex flex-wrap items-center -mx-1">
                    <div className="relative w-full sm:w-7/12 pl-4">
                        <div className="relative z-9 text-left lg:pl-12 xl:pl-0  md:max-lg:pl-1 ">
                            <h2 className="xl:w-9/12 lg:text-5xl xl:text-6xl sm:text-5xl  md:max-lg:mt-9 lg:w-10/12 sm:w-full xl:mt-0 text-4xl leading-tight font-bold mt-0 mb-5 transition-all duration-300 text-[#333] font-sans">
                                One-stop Solution For Your <span className="xl:text-6xl sm:text-5xl lg:text-5xl text-4xl  customOrange">Services</span>
                            </h2>
                            <span className="text-xl font-normal leading-9 text-[#333]  sm:py-5 py-0 block">
                                Order any service, anytime from anywhere
                            </span>
                            <div className="sm:mt-11 mt-5 text-left text-[#999] font-roboto text-sm">
                                <form action="#" className="flex items-center max-w-lg">
                                    <div className="relative w-full">
                                        <input className="sm:h-20 h-14 bg-white w-full pl-16 pr-20 rounded-lg border border-white font-inherit text-inherit" type="text" placeholder="What are you looking for" />
                                        <div className="absolute left-9 top-1/2 transform -translate-y-1/2 text-xl">
                                            <i className="searchBotton sBotton"></i>
                                        </div>
                                        {/* <button type="submit" className="absolute right-0 h-full top-0 bottom-0 w-20 text-white bg-gray-600 transition-all duration-300 rounded-r-lg text-2xl focus:outline-none">
                                            <i className="searchBotton sBotton"></i>
                                        </button> */}
                                    </div>
                                </form>
                                <div className="flex items-center mt-6 w-full">
                                    <span className="text-xl customOrange mt-4 font-medium">Popular:</span>
                                    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:gap-0 grid-cols-2 items-center ml-4  list-none">
                                        <li className='m-2 ml-0'>
                                            <a className=" text-[#666] bg-white border w-full border-white rounded-lg inline-block text-sm px-5 py-2.5 transition-all duration-100 customBlueHover text-center" href="#" onClick={toggleElectricianSearch}>Electrician</a>
                                        </li>
                                        <li className='m-2 ml-0'>
                                            <a className=" text-[#666] bg-white border w-full border-white rounded-lg inline-block text-sm px-5 py-2.5 transition-all duration-100 customBlueHover text-center" href="#" onClick={toggleCleaningSearch}>Cleaner</a>
                                        </li>
                                        <li className='m-2 ml-0'>
                                            <a className=" text-[#666] bg-white border w-full border-white rounded-lg inline-block text-sm px-5 py-2.5 transition-all duration-100 customBlueHover text-center" href="#" onClick={togglePlumberSearch}>Plumber</a>
                                        </li>
                                        <li className='m-2 ml-0'>
                                            <a className=" text-[#666] bg-white border w-full border-white rounded-lg inline-block text-sm px-5 py-2.5 transition-all duration-100 customBlueHover text-center" href="#" onClick={toggleOutdoorHelpSearch}>OutdoorHelp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative sm:w-5/12  sm:max-md:mt-24 md:max-lg:mt-20 lg:max-xl:mt-20 -px-1">
                        <div className="relative z-2 animate-fade-in-up">
                            <img src={Banner} alt="Banner" className="w-full  sm:max-lg:h-[450px]" />
                        </div>
                    </div>
                </div>
            </div>
            {isCleaningSearchVisible && <CleaningSearch onClose={closeCleaningSearch} />}
            {isElectricianSearchVisible && <CleaningSearch onClose={closeElectricianSearch} />}
            {isPlumberSearchVisible && <PlumberSearch onClose={closePlumberSearch} />}
            {isOutdoorHelpSearchVisible && <CleaningSearch onClose={closeOutdoorHelpSearch} />}
        </div>
    );
};

export default HomePage;