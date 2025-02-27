import React, { useState } from 'react';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
const Profile = () => {
  const {user} = useSelector((state)=>state.profile);

  return (
    <div className="content mt-20 sm:w-11/12 w-11/12 mx-auto m-10 lg:w-8/12 xl:ml-[340px] lg:ml-[320px] xl:w-9/12 ml:w-96 " id="content">
        <div id="profile-info" className="profile-info">
          <div className="header text-center font-bold sm:text-4xl text-2xl text-shadow-md">
            Profile Information 
            {/* <a href="#edit-profile" id="edit-profile-button" className="edit-profile" onClick={handleEdit}>Edit Profile</a> */}
            <Link  to="/Dashboard/EditProfile" id="edit-profile-button" className=" sm:ml-4 sm:p-2 p-1 bg-blue-500 text-white sm:text-lg text-base rounded-md float-end" >Edit Profile</Link>
          </div>
          <hr />
          <div className=" w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">UserName:</span>
            <span className=" ml-3">{user.userName? user.userName : ''}</span>
          </div>
           <div className="w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">FirstName:</span>
            <span className="ml-3">{user.firstName? user.firstName : ''}</span>
          </div>
           <div className="w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">LastName:</span>
            <span className="ml-3">{user.lastName? user.lastName : ''}</span>
          </div>
          <div className="w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">Email:</span>
            <span className="ml-3">{user.email? user.email : ''}</span>
          </div>
          <div className="w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">Phone:</span>
            <span className="ml-3">{user.phone? user.phone : ''}</span>
          </div>
          <div className="w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">City:</span>
            <span className="ml-3">{user.city? user.city:''}</span>
          </div>
          <div className="w-4/5 text-xl m-4">
            <span className="inline-block w-28 font-bold">Area:</span>
            <span className="ml-3">{user.area? user.area:''}</span>
          </div>
          <div className="w-4/5 text-xl m-4">
            <span className=" inline-block w-28 font-bold">Address:</span>
            <span className="ml-3">{user.address? user.address:''}</span>
          </div>
        </div>
    </div>
  );
};

export default Profile;