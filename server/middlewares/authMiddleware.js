const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust based on your project structure
require("dotenv").config(); // Load environment variables

// Middleware to protect routes
exports.protect = async (req, res, next) => {
    let token;

    // Ensure token is sent in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]; // Extract token
            if (!token) {
                return res.status(401).json({ message: "Not authorized, token missing" });
            }

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach user to request (excluding password)
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(401).json({ message: "User not found" });
            }

            next(); // Proceed to next middleware
        } catch (error) {
            console.error("Auth error:", error);
            return res.status(401).json({ message: "Invalid or expired token" });
        }
    } else {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};
