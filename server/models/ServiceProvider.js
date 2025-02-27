const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },  // ✅ Ensure userName is required & unique
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    services: [{ type: String }],
    location: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], required: true },
    },
    isAvailable: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    notifications: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            message: { type: String, required: true },
            status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
        },
    ],
    serviceLogs: [
        {
            serviceId: { type: mongoose.Schema.Types.ObjectId },
            status: { type: String, default: "pending" },
        },
    ],
    complaints: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            complaint: { type: String, required: true },
            status: { type: String, default: "pending" },
        },
    ],
});

serviceProviderSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("ServiceProvider", serviceProviderSchema);
