import React, { useState, useEffect } from "react";
import "../SignupPage/SignupPage.css";
import Eclipse1 from "../../assets/Eclipse1.png";
import Eclipse2 from "../../assets/Eclipse2.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import OtpInput from "react-otp-input";
import {  signUp,signUpMobile } from "../../services/operations/authAPI";
import "../OtpPage/OtpPage.css";
const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/SignUp");
    }
  }, []);

  const handleOnChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { userName, email, phone, password, confirmPassword, otpOption } =
      signupData;
    if (otpOption == "phone") {
      dispatch(
        signUpMobile(
          userName,
          email,
          phone,
          password,
          confirmPassword,
          otp,
          otpOption,
          navigate
        )
      );
    } else {
      dispatch(
        signUp(userName, email, phone, password, confirmPassword, otp,otpOption, navigate)
      );
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-blur bg-black bg-opacity-50 ">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="loginSigninGradient p-5 rounded-3xl h-5/6 sm:h-[550px] xl:w-6/12 lg:w-8/12 md:w-10/12 flex shadow-2xl shadow-black">
          <Link to="/" className="relative -top-2 left-[98%] h-8 w-10 bg-transparent text-xl font-semibold border-none">
            X
          </Link>
          <div className="flex flex-col my-auto">
            <h2 className=' lg:text-3xl md:text-2xl font-bold'>Role The Carpet.!</h2>
            <div className="flex mt-5">
              <p className=' border-2 border-solid border-black xl:text-xl font-bold p-3 mr-5 xl:w-36 lg:w-32 lg:text-lg md:w-32 md:max-lg:mr-3'>Skip the lag?</p>
              <hr className='h-0 m-auto border-[1px] border-dashed border-black xl:w-40 lg:w-36 md:w-28'></hr>
            </div>
          </div>
          <form className="justify-center rounded-3xl border-solid border-[1px] border-[#fff] loginSigninBackground shadow-2xl shadow-black backdrop-blur-xl flex flex-col max-w-80 p-5 h-[450px] mt-5" onSubmit={handleVerifyAndSignup}>
             <img src={Eclipse1} className=' absolute -z-10 top-32 -left-20 transform -translate-y-44 scale-75 ' />
          <img src={Eclipse2} className='absolute -z-10 -bottom-56 -right-10 transform -translate-y-44 scale-75' />
            <div className="text-black font-semibold text-2xl">OTP</div>
            <div className="text-black font-medium text-sm">Just some details to get you in.!</div>
            <input
              type="text"
              className=" rounded-lg border-black  border-solid border-[1px] mt-4 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold"
              placeholder="OTP Sent To Your Email"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleOnChange}
            />
            {/* <OtpInput
        value={otp}
        onChange={handleOnChange}
        numInputs={6}
        inputType="number"
        renderSeparator={<span className="otp-separator">-</span>}
        renderInput={(props) => <input {...props} className="otp-input" />}
      /> */}
            <button type="submit" className="justify-center items-center rounded-lg mt-4 text-white whitespace-nowrap p-2 font-semibold text-base loginSigninButtonGradient">
              Sign Up
            </button>
            {/* <button
          loading={false}
            className="div-9-signup"
            onClick={() => dispatch(sendOtp(signupData.email))}
          >
            Resend it
          </button> */}

           <div className=' content-between rounded-md flex mt-4 gap-5 text-xs text-black font-normal py-[2px] px-1'>
            <div className=' text-xs'>Terms & Conditions</div>
            <div className='text-xs'>Support</div>
            <div className='text-xs'>Customer Care</div>
          </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OtpPage;
