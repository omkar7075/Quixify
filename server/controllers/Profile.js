const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// Method for updating a profile
exports.updateProfile = async (req, res) => {
  try {
    const {
      city = "",
      area = "",
      phone,
      address = "",
      firstName = "",
      lastName = "",
      email,
      userName,
    } = req.body;

    const id = req.user.id;

    // Fetch current user details to get the existing image
    const currentUser = await User.findById(id);
    if (!currentUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let image = currentUser.image; // Use existing image by default
    if (!image) {
      image = `https://api.dicebear.com/5.x/initials/svg?seed=${userName ? userName : 'Quixify'}`;
    }

    if (req.files && req.files.image) {
      const displayPicture = req.files.image;

      // Upload image to Cloudinary
      const imageCloud = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      );
      console.log(imageCloud);

      // Update image URL if upload was successful
      if (imageCloud && imageCloud.secure_url) {
        image = imageCloud.secure_url;
      }
    }

    // Update the profile fields
    const userDetails = await User.findByIdAndUpdate(
      id,
      {
        image: image,
        city,
        area,
        phone, // Ensure this matches your model's schema
        address,
        firstName,
        lastName,
        email,
        userName,
      },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Profile updated successfully",
      userDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
