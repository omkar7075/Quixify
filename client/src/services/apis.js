const BASE_URL = "http://localhost:4000/api/v1"

export const endpoints = {
  SIGNUP_API_MOBILE:BASE_URL + "/auth/signupmobile",
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESET_API:BASE_URL + "/ForgotPassword",
  RESETPASSWORD_API:BASE_URL+"/ResetPassword"
}
export const settingsEndpoints = {
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",

}