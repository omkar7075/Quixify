const bcrypt = require("bcrypt");
const { ForgotPasswordEmail } = require("../mail/templates/ForgotPassword");
const mailSender = require("../utils/mailSender");

const jwt = require('jsonwebtoken');
const User = require('../models/User');
require("dotenv").config();

exports.forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;
        const JWT_SECRET = process.env.JWT_SECRET;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User Is Not Registered",
            });
        }
        const secret = JWT_SECRET + user.password
        const payload = {
            id: user.id,
            email: user.email,
        }
        const token = jwt.sign(payload, secret, { expiresIn: '15m' })
        const updatedDetails = await User.findOneAndUpdate(
			{ email: email },
			{
				token: token,
				resetPasswordExpires: Date.now() + 900000,
			},
			{ new: true }
		);
		console.log("Details",updatedDetails)
        const link = `http://localhost:5173/ForgotPassword/${user.id}/${token}`
        console.log(link)
        const emailRes = await mailSender(
            email,
            "Your Reset Password Link send successfully",
            ForgotPasswordEmail(email, link)
          );
          console.log("Email Res ", emailRes);
        return res.status(200).json({
            success: true,
            user,
            message: "Password reset link have been sent to your email..",
          });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Forgot Password Link cannot Be Send. Please try again.",
        });

    }
}
exports.resetPasswordController = async (req, res) => {
	try {
		const { password, confirmPassword, token } = req.body;

		if (confirmPassword !== password) {
			return res.json({
				success: false,
				message: "Password and Confirm Password Does not Match",
			});
		}
		
		const userDetails = await User.findOne({ token: token });
		if (!userDetails) {
			return res.json({
				success: false,
				message: "Token is Invalid",
			});
		}
		
		if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: "Token is Expired, Please Regenerate Your Token",
			});
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ token: token },
			{ password: encryptedPassword },
			{ new: true }
		);
		res.json({
			success: true,
			message: "Password Reset Successful",
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: "Some Error in Updating the Password",
		});
	}
};


// app.get('/reset-password/:id/:token', (req, res) => {
//     const { id, token } = req.params
//     if (id !== user.id) {
//         res.send('Invalid ID...')
//         return;
//     }

//     const secret = JWT_SECRET + user.password
//     try {
//         const payload = jwt.verify(token, secret)
//         res.render('reset-password.ejs', { email: user.email })
//     } catch (error) {
//         console.log(error)
//         res.send(error.message)
//     }
// })

// app.post('/reset-password/:id/:token', (req, res) => {
//     const { id, token } = req.params
//     const { password } = req.body
//     console.log(password)
//     if (id !== user.id) {
//         res.send('Invalid ID...')
//         return;
//     }
//     const secret = JWT_SECRET + user.password
//     try {
//         const payload = jwt.verify(token, secret)
//         // res.render('reset-password.ejs', {email: user.email})
//         console.log(password)
//         user.password = password
//         res.send(user)
//     } catch (error) {
//         console.log(error)
//         res.send(error.message)
//     }

// })

// app.listen(3000, () => {
//     console.log('Server is running on 3000')
// })