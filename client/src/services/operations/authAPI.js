import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { setUser } from "../../slices/profileSlice";
import { auth } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const { SENDOTP_API, SIGNUP_API_MOBILE, SIGNUP_API, LOGIN_API, RESET_API,RESETPASSWORD_API } = endpoints;
export function resetPassword(password,confirmPassword,token,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
        checkUserPresent: true,
      });
      console.log("RESET Password API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password Updated Successfully");
      navigate("/");
    } catch (error) {
      console.log("RESET Password API ERROR............", error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
export function reset(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESET_API, {
        email,
        checkUserPresent: true,
      });
      console.log("RESET API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Link Sent Successfully");
      navigate("/");
    } catch (error) {
      console.log("RESET API ERROR............", error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/SignUp/OTP");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
// The sendOtpMobile function
export function sendOtpMobile(phone, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      // Initialize reCAPTCHA
      function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                onSignup();
              },
              "expired-callback": () => { },
            }
          );
        }
      }

      async function onSignup() {
        await onCaptchVerify(); // Ensure reCAPTCHA is verified

        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phone, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            toast.success("OTP sent successfully!");
            navigate("/SignUp/OTP");
          })
          .catch((error) => {
            console.error("Error during phone auth:", error);
            toast.error(error.message || "Failed to send OTP");
          });
      }

      await onSignup();
    } catch (error) {
      console.error("Error during phone auth:", error);
      toast.error(error.message || "Failed to send OTP");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

export function signUpMobile(
  userName,
  email,
  phone,
  password,
  confirmPassword,
  otp,
  otpOption,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Verifying OTP...");
    dispatch(setLoading(true));

    try {
      const confirmationResult = window.confirmationResult;
      if (!confirmationResult) {
        throw new Error("No OTP request found");
      }

      const result = await confirmationResult.confirm(otp);
      console.log("Result", result);
      // const user = result.user;
      // You can handle additional user data here and store in state or send to your backend

      // dispatch(setToken(user.accessToken));
      // dispatch(setUser(user));
      // localStorage.setItem("token", JSON.stringify(user.accessToken));
      // localStorage.setItem("user", JSON.stringify(user));
      const response = await apiConnector("POST", SIGNUP_API_MOBILE, {
        userName,
        email,
        phone,
        password,
        confirmPassword,
        otp,
      });
      console.log("SignUp Mobile Response", response);

      toast.success("Phone number verified successfully!");
      navigate("/Login");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(error.message || "Failed to verify OTP");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

export function signUp(
  userName,
  email,
  phone,
  password,
  confirmPassword,
  otp,
  otpOption,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        userName,
        email,
        phone,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/LogIn");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error(error.response.data.message);
      // toast.error(error.message);
      // if (error.message === "The OTP is not valid") {
      //   toast.error("Invalid OTP. Please try again.");
      // } else {
      //   navigate("/SignUp");
      // }
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(userName, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        userName,
        password,
      });

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.userName}`;
      dispatch(setUser({ ...response.data.user, image: userImage }));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      // toast.error("Login Failed")
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}
