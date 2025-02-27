const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  services: [{ type: String, required: true }],
  rating: { type: Number, default: 0 },
  address: {
    city: { type: String },
    landmark: { type: String },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Provider", ProviderSchema);
