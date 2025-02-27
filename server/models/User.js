const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    firstName:{
      type: String,
      trim: true,
      default:null
    },
    lastName:{
      type: String,
      trim: true,
      default:null
    },
    phone: {
      type: String,
      trim: true,
      default:null
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    image: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      default: null,
    },
    area: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
    orderList: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "cart"
    }
  },
  { timestamps: true }
);

// Export the User model
module.exports = mongoose.model("User", userSchema);
