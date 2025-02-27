// Import Mongoose
const mongoose = require('mongoose');

// Define the order schema
const cartSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  serviceProviderName: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "ServiceProvider"
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  billAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  timeslot: {
    type: String,
    required: true
  },
  orderote: {
    type: String
  },
  review: {
    type: String
  }
});

// Create a model from the schema
const Cart = mongoose.model('Cart', cartSchema);

// Export the model
module.exports = Cart;
