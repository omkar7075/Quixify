import React, { useState } from "react";
import Eclipse1 from "../../assets/Eclipse1.png";
import Eclipse2 from "../../assets/Eclipse2.png";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { sendOtp, sendOtpMobile } from "../../services/operations/authAPI";
import { setSignupData } from "../../slices/authSlice";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import CSS for PhoneInput

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [otpOption, setOtpOption] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { userName, email, phone, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle phone input change
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!formData.email ||
    !formData.phone ||
    !formData.userName ||
    !formData.password ||
    !formData.confirmPassword) {
      toast.error("Please Fill All Fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }

    const signupData = {
      ...formData,
      otpOption
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));

    // Send OTP to user for verification
    if (otpOption == "email") {
      dispatch(sendOtp(formData.email, navigate));
    } else {
      dispatch(sendOtpMobile(formData.phone, navigate));
    }

    // Reset
    setFormData({
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-blur bg-black bg-opacity-50">
      <div className="loginSigninGradient p-3 rounded-3xl h-[90%] sm:h-[600px] xl:w-6/12 lg:w-8/12 sm:w-10/12 w-11/12 flex shadow-2xl shadow-black">
        <Link to="/" className="relative -top-2 left-[98%] h-8 w-10 bg-transparent text-xl font-semibold border-none">X</Link>
        <div className="sm:flex sm:flex-col sm:my-auto hidden">
          <h2 className="lg:text-3xl md:text-2xl font-bold">Role The Carpet.!</h2>
          <div className="flex mt-5">
            <p className="border-2 border-solid border-black xl:text-xl font-bold p-3 mr-5 xl:w-36 lg:w-32 lg:text-lg md:w-32 md:max-lg:mr-3">Skip the lag?</p>
            <hr className="h-0 m-auto border-[1px] border-dashed border-black xl:w-40 lg:w-36 md:w-28"></hr>
          </div>
        </div>
        <form className="justify-center rounded-3xl border-solid border-[1px] border-[#fff] loginSigninBackground shadow-2xl shadow-black backdrop-blur-xl flex flex-col max-w-80 py-2 px-5 h-[520px] mt-3" onSubmit={handleOnSubmit}>
          <img src={Eclipse1} className="absolute -z-10 top-36 -left-24 transform -translate-y-44 scale-75" />
          <img src={Eclipse2} className="absolute -z-10 -bottom-52 -right-8 transform -translate-y-44 scale-75" />
          <div className="text-black font-semibold text-2xl mt-4">Signup</div>
          <div className="text-black font-medium text-sm">Just some details to get you in.!</div>
          <input type="text" name="userName" value={userName} className="rounded-lg border-black border-solid border-[1px] mt-2 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold" placeholder="Username" onChange={handleOnChange} />
          <input type="email" name="email" value={email} className="rounded-lg border-black border-solid border-[1px] mt-2 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold" placeholder="Email" onChange={handleOnChange} />
          <PhoneInput defaultCountry="IN" className="rounded-lg border-black border-solid border-[1px] mt-2 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold" placeholder="Phone Number" value={phone} onChange={handlePhoneChange} />
          <input type={showPassword ? "text" : "password"} name="password" value={password} className="rounded-lg border-black border-solid border-[1px] mt-2 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold" placeholder="Password" onChange={handleOnChange} />
          <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-5 top-[57%] cursor-pointer">
            {showPassword ? <AiOutlineEyeInvisible className="w-6 h-6 text-black relative -top-16 -left-2" /> : <AiOutlineEye className="w-6 h-6 text-black relative -top-16 -left-2" />}
          </span>
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={confirmPassword} className="rounded-lg border-black border-solid border-[1px] mt-2 text-black whitespace-nowrap justify-center text-sm bg-transparent p-2 font-bold" placeholder="Confirm Password" onChange={handleOnChange} />
          <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-5 top-[68%] cursor-pointer">
            {showConfirmPassword ? <AiOutlineEyeInvisible className="w-6 h-6 text-black relative -top-[76px] -left-2" /> : <AiOutlineEye className="w-6 h-6 text-black relative -top-[76px] -left-2" />}
          </span>
          <div className="flex mt-1">
            <label className="flex items-center">
              <input type="radio" name="otpOption" value="email" checked={otpOption === "email"} onChange={() => setOtpOption("email")} className="mr-0" />
              Send OTP to Email
            </label>
            <label className="flex items-center">
              <input type="radio" name="otpOption" value="phone" checked={otpOption === "phone"} onChange={() => setOtpOption("phone")} className="mr-0" />
              Send OTP to Phone
            </label>
          </div>
          <button type="submit" className="justify-center items-center rounded-lg mt-2 text-white whitespace-nowrap p-2 font-semibold text-base loginSigninButtonGradient">Send OTP</button>
          <div className="text-black self-center mt-1 font-bold text-xs">Forgot password?</div>
          <div className="flex items-center mt-2 gap-3 text-xs text-black font-medium whitespace-nowrap">
            <div className="border-solid border-[1px] bg-black w-28 h-[3px]"></div>
            <div>Or</div>
            <div className="border-solid border-[1px] bg-black w-24 h-[3px]"></div>
          </div>
          <div className="flex self-center content-center mt-1 gap-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83e6ca55bccdb0c76489510623cc42fed4fe08d9a07e12358326c1d41a003fa?" className="aspect-square object-center w-6" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9412a1b5f734130b3b81eca8b73a5ae75e92ed355a74a26940323a45b70a11ac?" className="aspect-square object-center w-6" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3adb61468c73b5003fb8faede466cf710d7026f9a6230ea84680eeb740967e52?"
              className="aspect-square object-center w-6"
            />
          </div>
          <div className="text-black self-center mt-1 font-bold text-xs">Already a member.?
          <Link to="/Login" className="self-center text-blue-600 mt-1 font-bold text-xs">Login</Link>
          </div>
          <div className=' content-between rounded-md flex mt-4 gap-5 text-xs text-black font-normal py-[2px] px-1'>
            <div className=' text-xs'>Terms & Conditions</div>
            <div className='text-xs'>Support</div>
            <div className='text-xs'>Customer Care</div>
          </div>
          
        </form>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default SignupPage;
