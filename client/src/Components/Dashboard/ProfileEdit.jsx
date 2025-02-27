import React, { useState } from "react";
// import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { FcOldTimeCamera } from "react-icons/fc"; // Import the icon
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../services/operations/SettingsAPI";

const ProfileEdit = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({
    userName: user.userName,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phone: user.phone || "",
    city: user.city || "",
    area: user.area || "",
    address: user.address || "",
    image: user.image || `https://api.dicebear.com/5.x/initials/svg?seed=${user.userName || 'Quixify'}`,
    imageFile: null, // Add image file
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prevProfile) => ({
        ...prevProfile,
        image: reader.result,
        imageFile: file,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userName", profile.userName);
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);
    formData.append("email", profile.email);
    formData.append("phone", profile.phone);
    formData.append("city", profile.city);
    formData.append("area", profile.area);
    formData.append("address", profile.address);
    if (profile.imageFile) {
      formData.append("image", profile.imageFile);
    }
    else {
      formData.append("image", profile.image);
    }

    dispatch(updateProfile(token, formData, navigate));
  };

  return (
    <div className=" sm:mt-24 mt-28 w-11/12 mx-auto sm:w-11/12 m-10 lg:w-8/12 lg:ml-[340px] xl:w-9/12 ml:w-96 mb-20" id="content">
      <div id="edit-profile" className=" mt-5 py-3 px-5 rounded-md">
        <div className=" text-center font-bold sm:text-4xl text-3xl text-shadow-md">Edit Profile</div>
        <hr />
        <div className=" mb-5 flex items-center">
          <div className="relative inline-block">
            <FcOldTimeCamera className=" w-7 h-7 opacity-100 " />
            <img src={profile.image} alt="Profile" className="block w-28 h-28 rounded-[50%] mr-5"  />
          </div>
          <input type="file" className=" absolute w-28 h-28 rounded-[50%] opacity-0" accept="image/*" onChange={handleImageChange} />
        </div>
        <form onSubmit={handleSave}>
          <div className="editProfile-form-group w-full mb-4">
            <label htmlFor="userName" className=" block mb-1">Your UserName*</label>
            <input
              type="text"
              id="userName"
              name="userName"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.userName}
              onChange={handleChange}
              placeholder="Type Your UserName"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="firstName" className=" block mb-1">Your First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.firstName}
              onChange={handleChange}
              placeholder="Type Your First Name"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="lastName" className=" block mb-1">Your Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.lastName}
              onChange={handleChange}
              placeholder="Type Your Last Name"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="email" className=" block mb-1">Your Email*</label>
            <input
              type="email"
              id="email"
              name="email"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.email}
              onChange={handleChange}
              placeholder="Type Your Email"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="phone" className=" block mb-1">Phone Number*</label>
            <input
              type="text"
              id="phone"
              name="phone"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Type Your Number"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="city" className=" block mb-1">Your City*</label>
            <input
              type="text"
              id="city"
              name="city"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.city}
              onChange={handleChange}
              placeholder="Type Your City"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="area" className=" block mb-1">Your Area*</label>
            <input
              type="text"
              id="area"
              name="area"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.area}
              onChange={handleChange}
              placeholder="Type Your Area"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="address" className=" block mb-1">Your Address*</label>
            <input
              type="text"
              id="address"
              name="address"
               className=" w-full p-3 border-solid border border-[#ccc] bg-[#e6e6ff]"
              value={profile.address}
              onChange={handleChange}
              placeholder="Type Your Address"
            />
          </div>
          <button type="submit" id="save-edit" className=" text-xl float-right py-3 px-5 bg-[#55cfff]  border-none rounded-md transition-colors duration-300 cursor-pointer hover:bg-[#1dbaeb]">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
