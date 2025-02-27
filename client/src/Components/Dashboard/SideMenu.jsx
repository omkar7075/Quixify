// src/components/SideMenu.js
import React from 'react';
import Dashboard from '../../assets/Dashboard.png';
import OrderSummary from '../../assets/Order Summary.png';
import Profile from '../../assets/Profile.png';
import Setting from '../../assets/Setting.png';
import Review from '../../assets/Review.png';
import LogOut from '../../assets/Log Out.png';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SideMenu = () => {
  const {user} = useSelector((state)=> state.profile)
  return (
    <div className="side-menu hidden bg-[#d4d3ff] fixed top-[80px] md:h-[calc(100vh-135px)] md:w-[270px] md:m-[10px-10px] xl:m[20wpx-25px] h-[calc(100vh-135px)] w-[200px] m-[20px_30px] lg:flex lg:flex-col rounded-[30px]">
      <div className="profile-data flex flex-col items-center justify-center my-3 sm:my-3 md:my-5 lg:my-7 xl:my-9">
        <div className="dashboard-profile-pic">
          <img className=" w-28 h-28" loading="lazy" alt="profile-image" src={user.image} style={{borderRadius:'50%'}} />
        </div>
        <div className="name text-base sm:text-base md:text-lg lg:text-xl font-bold text-center">{user.userName}</div>
        <div className="service-type text-sm sm:text-sm md:text-bash lg:text-xl font-regular">Cleaning services</div>
      </div>
      <div className="menus mx-1 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 my-0 flex flex-col justify-center">
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={Dashboard} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#dashboard">Dashboard</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={OrderSummary} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#order">Order Summary</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={Profile} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#serviceList">Profile</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={Setting} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#serviceProviderList">Setting</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={Review} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#customerList">Reviews</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={LogOut} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#">Log Out</a>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;