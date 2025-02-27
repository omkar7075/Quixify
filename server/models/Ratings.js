// Import Mongoose
const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema({
  cartData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: false
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});

// Create a model from the schema
const Review = mongoose.model('Review', reviewSchema);

// Export the model
module.exports = Review;
