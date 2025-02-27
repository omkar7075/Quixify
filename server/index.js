const express = require("express"); 
const app = express();
const userRoutes = require("./routes/User");
const contactUsRoute = require("./routes/Contact");
const forgotRoute = require("./routes/ForgotPassword");
const profileRoutes = require("./routes/Profile");
const serviceRoutes = require("./routes/serviceRoutes"); // Import service routes
const connectDB = require("./config/database"); 
const { cloudinaryConnect } = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

dotenv.config();
const PORT = 4000;

// Database connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Cloudinary connection
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1", contactUsRoute);
app.use("/api/v1", forgotRoute);
app.use("/api/v1", serviceRoutes); // ✅ Added service routes

// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
