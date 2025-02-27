// src/components/AdminSideMenu.js
import React from 'react';
import Admin from '../../assets/Administrator.png';
import Dashboard from '../../assets/Dashboard.png';
import OrderSummary from '../../assets/Order Summary.png';
import Service from '../../assets/ServiceProviderIcon.png';
import ServiceProvider from '../../assets/Setting.png';
import Customer from '../../assets/Customer.png';
import LogOut from '../../assets/Log Out.png';
import { useSelector } from 'react-redux';

const AdminSideMenu = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="side-menu hidden bg-[#d4d3ff] fixed top-[80px] md:h-[calc(100vh-135px)] md:w-[270px] md:m-[10px-10px] xl:m[20wpx-25px] h-[calc(100vh-135px)] w-[200px] m-[20px_30px] lg:flex lg:flex-col rounded-[30px]">
      <div className="profile-data flex flex-col items-center justify-center my-3 sm:my-3 md:my-5 lg:my-7 xl:my-9">
        <div className="dashboard-profile-pic">
          <img className="w-28 h-28" loading="lazy" alt="profile-image" src={Admin} style={{ borderRadius: '50%' }} />
        </div>
        <div className="name text-base sm:text-base md:text-lg lg:text-xl font-bold text-center">Daxesh</div>
        <div className="service-type text-sm sm:text-sm md:text-bash lg:text-xl font-regular">Admin</div>
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
          <div className="menuIcon mr-4"><img src={Service} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#serviceList">Service Categories</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={ServiceProvider} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#serviceProviderList">Service Providers</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={Customer} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#customerList">Customers</a>
        </div>
        <div className="menu mx-1.5 my-1.5 sm:my-2 md:my-2.5 lg:my-3 xl:my-3.5 font-bold flex items-left">
          <div className="menuIcon mr-4"><img src={LogOut} alt="icon" /></div>
          <a className="name text-base sm:text-base md:text-lg lg:text-xl" href="#">Log Out</a>
        </div>
      </div>
    </div>
  );
}

export default AdminSideMenu;
