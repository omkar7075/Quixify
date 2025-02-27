import React, { useState } from 'react';
import '../LoginPage/LoginPage.css';
import Eclipse1 from '../../assets/Eclipse1.png';
import Eclipse2 from '../../assets/Eclipse2.png';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../services/operations/authAPI"

  const LoginPage = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  })
   const [showPassword, setShowPassword] = useState(false)

  const { userName, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(userName, password, navigate))
  }
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-blur bg-black bg-opacity-50 '>
      <div className='loginSigninGradient p-5 rounded-3xl h-5/6 sm:h-[550px] xl:w-6/12 lg:w-8/12 sm:w-10/12 w-11/12 flex shadow-2xl shadow-black'>
        {/* <button className='log-cls-login' onClick={onClose}>X</button> */}
        <Link to='/' className='relative -top-2 left-[98%] h-8 w-10 bg-transparent text-xl font-semibold border-none' >X</Link>
        <div className='sm:flex sm:flex-col sm:my-auto hidden'>
          <h2 className=' lg:text-3xl md:text-2xl font-bold'>Welcome Back.!</h2>
          <div className='flex mt-5'>
            <p className=' border-2 border-solid border-black xl:text-xl font-bold p-3 mr-5 xl:w-36 lg:w-32 lg:text-lg md:w-32 md:max-lg:mr-3'>Skip the lag?</p>
            <hr className='h-0 m-auto border-[1px] border-dashed border-black xl:w-40 lg:w-36 md:w-28'></hr>
          </div>
        </div>

        <form className=' justify-center rounded-3xl border-solid border-[1px] border-[#fff] loginSigninBackground shadow-2xl shadow-black backdrop-blur-xl flex flex-col max-w-80 p-5 h-[450px] mt-5' onSubmit={handleOnSubmit}>
          <img src={Eclipse1} className=' absolute -z-10 top-32 -left-20 transform -translate-y-44 scale-75 ' />
          <img src={Eclipse2} className='absolute -z-10 -bottom-56 -right-10 transform -translate-y-44 scale-75' />
          <div className=' text-black font-semibold text-2xl'>Login</div>
          <div className='text-black font-medium text-sm'>Glad you're back!</div>
          <input 
          type="text" 
          name="userName"
          value={userName}
          className=" rounded-lg border-black  border-solid border-[1px] mt-4 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold" placeholder='Username'
          onChange={handleOnChange} />

          <input type="password"
          name='password'
          value={password}
          className="rounded-lg border-black  border-solid border-[1px] mt-4 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold " placeholder='Password' 
          onChange={handleOnChange}
          />
          <div className=' mt-2'>
            <input type='checkbox' className=' mt-2 object-center w-6 self-start' name='remember_me' />
            Remember Me
          </div>
          <button type="submit" className="justify-center items-center rounded-lg mt-4 text-white whitespace-nowrap p-2 font-semibold text-base loginSigninButtonGradient">Login</button>
          <div className=' text-black self-end mt-3 font-medium text-xs'><Link to='/Email' className='' >Forgot password?</Link></div>

          <div className=' items-center flex mt-5 gap-3 text-xs text-black font-medium whitespace-nowrap content-between'>
            <div className=' text-black border-solid border-[1px] bg-black self-stretch w-28 h-[3px] my-auto'></div>
            <div className=' self-stretch'>Or</div>
            <div className='dtext-black border-solid border-[1px] bg-black self-stretch w-24 h-[3px] my-auto'></div>
          </div>
          <div className=' flex self-center content-center mt-2 gap-3'>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83e6ca55bccdb0c76489510623cc42fed4fe08d9a07e12358326c1d41a003fa?"
              className=" aspect-square object-center w-6"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9412a1b5f734130b3b81eca8b73a5ae75e92ed355a74a26940323a45b70a11ac?"
              className="aspect-square object-center w-6"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3adb61468c73b5003fb8faede466cf710d7026f9a6230ea84680eeb740967e52?"
              className="aspect-square object-center w-6"
            />
          </div>
          {/* <div className='div-16-login'>
            Don’t have an account? <span className='signup-link' onClick={onSignupClick}>Signup</span>
          </div> */}
          <div className=' text-black self-center mt-3 font-semibold text-xs'>
            Don’t have an account? <Link to='/SignUp' className='signup-link' >Signup</Link>
          </div>
          <div className=' content-between rounded-md flex mt-4 gap-5 text-xs text-black font-normal py-[2px] px-1'>
            <div className=' text-xs'>Terms & Conditions</div>
            <div className='text-xs'>Support</div>
            <div className='text-xs'>Customer Care</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
