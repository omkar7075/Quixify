const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User Signup
exports.signup = async (req, res) => {
    try {
        const { userName, email, password, confirmPassword } = req.body;

        // Check if all fields are provided
        if (!userName || !email || !password || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists, please login." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            userName,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${userName}`,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: { _id: user._id, userName: user.userName, email: user.email }
        });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ success: false, message: "Signup failed, please try again" });
    }
};

// User Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please provide both email and password" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found, please sign up." });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // Store token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: { _id: user._id, userName: user.userName, email: user.email }
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Server error, please try again" });
    }
};

exports.signupmobile = async (req, res) => {
    try {
        const { phone } = req.body;

        if (!phone) {
            return res.status(400).json({ success: false, message: "Phone number is required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists, please login." });
        }

        // Generate OTP (Example: 6-digit random OTP)
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Store OTP in the database (for verification later)
        // You can use a separate OTP collection or a temporary field in the User model
        // (For now, assume we're storing OTP in-memory)

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp: otp, // Ideally, send this via SMS instead of returning in response
        });

    } catch (error) {
        console.error("Signup Mobile Error:", error);
        res.status(500).json({ success: false, message: "Signup via mobile failed, please try again" });
    }
};
