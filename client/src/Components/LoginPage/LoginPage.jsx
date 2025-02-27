import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/operations/authAPI";
import Eclipse1 from '../../assets/Eclipse1.png';
import Eclipse2 from '../../assets/Eclipse2.png';
import '../LoginPage/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",  // Changed from userName to email for backend compatibility
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await dispatch(login(email, password, navigate));

      if (response?.success) {
        localStorage.setItem("token", response.token);
        navigate("/service-provider"); // Redirect after successful login
      } else {
        setErrorMsg(response?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg(err?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-blur bg-black bg-opacity-50'>
      <div className='loginSigninGradient p-5 rounded-3xl h-5/6 sm:h-[550px] xl:w-6/12 lg:w-8/12 sm:w-10/12 w-11/12 flex shadow-2xl shadow-black'>
        <Link to='/' className='relative -top-2 left-[98%] h-8 w-10 bg-transparent text-xl font-semibold border-none'>X</Link>
        
        <div className='sm:flex sm:flex-col sm:my-auto hidden'>
          <h2 className='lg:text-3xl md:text-2xl font-bold'>Welcome Back!</h2>
          <div className='flex mt-5'>
            <p className='border-2 border-solid border-black xl:text-xl font-bold p-3 mr-5 xl:w-36 lg:w-32 lg:text-lg md:w-32 md:max-lg:mr-3'>Skip the lag?</p>
            <hr className='h-0 m-auto border-[1px] border-dashed border-black xl:w-40 lg:w-36 md:w-28'></hr>
          </div>
        </div>

        <form className='justify-center rounded-3xl border-solid border-[1px] border-[#fff] loginSigninBackground shadow-2xl shadow-black backdrop-blur-xl flex flex-col max-w-80 p-5 h-[450px] mt-5' onSubmit={handleOnSubmit}>
          <img src={Eclipse1} className='absolute -z-10 top-32 -left-20 transform -translate-y-44 scale-75' />
          <img src={Eclipse2} className='absolute -z-10 -bottom-56 -right-10 transform -translate-y-44 scale-75' />

          <div className='text-black font-semibold text-2xl'>Login</div>
          <div className='text-black font-medium text-sm'>Glad you're back!</div>

          <input 
            type="email" 
            name="email"
            value={email}
            className="rounded-lg border-black border-solid border-[1px] mt-4 text-black text-sm bg-transparent p-2 font-bold" 
            placeholder='Email' 
            onChange={handleOnChange} 
            required
          />

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password"
              value={password}
              className="rounded-lg border-black border-solid border-[1px] mt-4 text-black text-sm bg-transparent p-2 font-bold w-full" 
              placeholder='Password' 
              onChange={handleOnChange} 
              required
            />
            <button 
              type="button" 
              className="absolute top-6 right-3 text-gray-500 text-sm" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className='mt-2'>
            <input type='checkbox' className='mt-2 w-6' name='remember_me' />
            Remember Me
          </div>

          {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}

          <button type="submit" className="rounded-lg mt-4 text-white p-2 font-semibold text-base loginSigninButtonGradient">
            Login
          </button>

          <div className='text-black self-end mt-3 font-medium text-xs'>
            <Link to='/Email'>Forgot password?</Link>
          </div>

          <div className='items-center flex mt-5 gap-3 text-xs text-black font-medium'>
            <div className='border-black border-solid border-[1px] bg-black w-28 h-[3px]'></div>
            <div>Or</div>
            <div className='border-black border-solid border-[1px] bg-black w-24 h-[3px]'></div>
          </div>

          <div className='flex self-center mt-2 gap-3'>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83e6ca55bccdb0c76489510623cc42fed4fe08d9a07e12358326c1d41a003fa?" className="w-6" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9412a1b5f734130b3b81eca8b73a5ae75e92ed355a74a26940323a45b70a11ac?" className="w-6" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3adb61468c73b5003fb8faede466cf710d7026f9a6230ea84680eeb740967e52?" className="w-6" />
          </div>

          <div className='text-black self-center mt-3 font-semibold text-xs'>
            Don’t have an account? <Link to='/SignUp'>Signup</Link>
          </div>

          <div className='flex mt-4 gap-5 text-xs text-black font-normal'>
            <div>Terms & Conditions</div>
            <div>Support</div>
            <div>Customer Care</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
