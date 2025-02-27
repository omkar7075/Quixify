// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  signupmobile
} = require("../controllers/Auth")

const { auth } = require("../middlewares/auth")

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

//route for sending otp to user's phone
router.post('/signupmobile',signupmobile)

// Export the router for use in the main application
module.exports = router