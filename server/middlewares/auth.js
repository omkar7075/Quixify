const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

// Authentication Middleware
exports.auth = async (req, res, next) => {
    try {
        console.log("Before token extraction");

        // Extract token from header, cookies, or body
        const token = req.cookies.token 
            || req.body.token 
            || req.header("Authorization")?.replace("Bearer ", "");  // Added optional chaining

        console.log("Extracted Token:", token);

        // If token is missing, return error
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        // Verify the token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded Token:", decoded);
            req.user = decoded; // Attach user data to request
            next();
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: 'Token is invalid or expired',
            });
        }
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while validating the token',
        });
    }
};
