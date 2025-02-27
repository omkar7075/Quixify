const express = require("express");
const router = express.Router();
const { forgotPasswordController, resetPasswordController } = require("../controllers/ForgotPassword");

router.post("/ForgotPassword", forgotPasswordController);
router.post("/ResetPassword",resetPasswordController)

module.exports = router;