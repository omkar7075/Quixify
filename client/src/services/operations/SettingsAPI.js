import { toast } from "react-hot-toast"
import {  setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { settingsEndpoints } from "../apis"
// import { logout } from "./authAPI"

const {
  UPDATE_PROFILE_API,
} = settingsEndpoints


export function updateProfile(token, formData,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData,         {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.userDetails.image
        ? response.data.userDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.userDetails.userName}`
      dispatch(
        setUser({ ...response.data.userDetails, image: userImage })
      )
      localStorage.setItem("user", JSON.stringify(response.data.userDetails))
      toast.success("Profile Updated Successfully")
      navigate('/Dashboard')
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")

    }
    toast.dismiss(toastId)
  }
}
