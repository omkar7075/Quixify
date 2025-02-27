// import '../Navbar/Navbar.css';
// import Logo from '../../assets/Logo.png';
// import React, { useState,useEffect } from 'react';
// import { BsChevronDown } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import { Link, NavLink, matchPath, useLocation } from "react-router-dom";
// import { apiConnector } from "../../services/apiConnector";
// import ProfileDropdown from './ProfileDropdown';

// const Navbar = () => {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   //  const location = useLocation();
//   //  const [loading, setLoading] = useState(false);

//   return (
//     <div className='fixed flex left-0 w-full top-0 z-10 h-20 bg-transparent p-4 items-center justify-center backdrop-blur-2xl navbarShadow '>
//       <div className='flex w-[13%]'>
//         <img src={Logo} alt='' className='w-full align-middle cursor-pointer' />
//       </div>
//       <div className=' flex-grow'>
//         <ul className='flex w-11/12 text-center items-center justify-center'>
//           <li className=' list-none'>
//             <NavLink to='/' className=" py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">Home</NavLink>
//           </li>
//           <li className=' list-none'>
//             <a href='#' className=" py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">Services</a>
//           </li>
//           <li className=' list-none'>
//             <NavLink to='AboutUs' className=" py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">About US</NavLink>
//           </li>
//           <li className=' list-none'>
//             <NavLink to='/ContactUs' className=" py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">Contact</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className='rightnavbar'>
//         <ul className='rightnavbarul'>
//           <li className='rightnavbarli'>
//             {/* <a href='#' onClick={openLoginPage}>
//               Login
//             </a> */}

//             {/*<NavLink to='/Login'>Login</NavLink>*/}
//           {token === null && (
//             <NavLink to="/Login">
//                 Log in
//             </NavLink>
//           )}  
//           {token !== null && <ProfileDropdown />}
//           </li>
//         </ul>
//         {/* <LoginPage isOpen={isLoginPageOpen} onClose={closeLoginPage} onSignupClick={openSignupPage} />
//         <SignupPage isOpen={isSignupPageOpen} onClose={closeSignupPage} onLoginClick={openLoginPage} /> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import '../Navbar/Navbar.css';
import Logo from '../../assets/Logo.png';
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronDown, BsList, BsX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, NavLink, matchPath, useLocation } from "react-router-dom";
import ProfileDropdown from './ProfileDropdown';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsMobileMenuOpen(false));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='fixed flex left-0 w-full top-0 z-10 h-20 bg-transparent p-4 items-center justify-between backdrop-blur-2xl navbarShadow' ref={ref}>
      <div className='flex w-1/3 md:w-[13%]'>
        <img src={Logo} alt='' className='md:w-full sm:w-1/2 w-11/12 align-middle cursor-pointer' />
      </div>
      <div className='flex-grow hidden sm:flex'>
        <ul className='flex w-11/12 text-center items-center justify-center'>
          <li className='list-none'>
            <NavLink to='/' className="py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">Home</NavLink>
          </li>
          <li className='list-none'>
            <a href='#' className="py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">Services</a>
          </li>
          <li className='list-none'>
            <NavLink to='AboutUs' className="py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">About US</NavLink>
          </li>
          <li className='list-none'>
            <NavLink to='/ContactUs' className="py-3 px-5 relative text-black z-0 text-xl transition-all duration-300 ease-in hover:text-blue-600 hover:bg-azure hover:rounded-full hover:text-2xl hover:transition-all hover:duration-300 hover:ease-in">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className={`absolute top-20 left-0 w-full bg-white backdrop-blur-2xl navbarShadow transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden sm:hidden`}>
        <ul className='flex flex-col items-center'>
          <li className='list-none py-2' onClick={toggleMobileMenu}>
            <NavLink to='/' className="text-black text-xl transition-all duration-300 ease-in hover:text-blue-600">Home</NavLink>
          </li>
          <li className='list-none py-2' onClick={toggleMobileMenu}>
            <a href='#' className="text-black text-xl transition-all duration-300 ease-in hover:text-blue-600">Services</a>
          </li>
          <li className='list-none py-2' onClick={toggleMobileMenu}>
            <NavLink to='/AboutUs' className="text-black text-xl transition-all duration-300 ease-in hover:text-blue-600">About US</NavLink>
          </li>
          <li className='list-none py-2' onClick={toggleMobileMenu}>
            <NavLink to='/ContactUs' className="text-black text-xl transition-all duration-300 ease-in hover:text-blue-600">Contact</NavLink>
          </li>
          {/* <li className='list-none py-2' onClick={toggleMobileMenu}>
            {token === null && (
              <NavLink to="/Login" className="text-black text-xl transition-all duration-300 ease-in hover:text-blue-600">Log in</NavLink>
            )}
            {token !== null && <ProfileDropdown />}
          </li> */}
        </ul>
      </div>
      <div className='hidden sm:flex sm:justify-between  sm:items-center'>
        <ul className='list-none w-24'>
          <li className='rightnavbarli'>
            {token === null && (
              <NavLink to="/Login">
                Log in
              </NavLink>
            )}
            {token !== null && <ProfileDropdown />}
          </li>
        </ul>
      </div>
       <div className='flex sm:hidden justify-between sm:ml-0 ml-[50%] items-center'>
        <ul className='list-none sm:w-24'>
          <li className='rightnavbarli'>
            {token === null && (
              <NavLink to="/Login">
                Log in
              </NavLink>
            )}
            {token !== null && <ProfileDropdown />}
          </li>
        </ul>
      </div>
      <div className='flex sm:hidden'>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <BsX size={30} /> : <BsList size={30} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
