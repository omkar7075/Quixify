const ServiceProvider = require('../models/ServiceProvider');
const User = require('../models/User'); // Ensure User model is imported
const Provider = require("../models/Provider"); // Make sure you have a Provider model

// Get nearby service providers based on location
const getNearbyProviders = async (req, res) => {
    const { longitude, latitude, maxDistance } = req.query;

    if (!longitude || !latitude || !maxDistance) {
        return res.status(400).json({ message: 'Longitude, latitude, and maxDistance are required' });
    }

    try {
        const providers = await ServiceProvider.aggregate([
            {
                $geoNear: {
                    near: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                    distanceField: "distance",
                    maxDistance: parseFloat(maxDistance),
                    spherical: true,
                    query: { isAvailable: true, hasAcceptedRequest: true }
                }
            },
            { $sort: { rating: -1 } } // Sort by highest rating
        ]);

        res.json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Heatmap Feature - Aggregate service demand
const getServiceDemandHeatmap = async (req, res) => {
    try {
        const demandData = await ServiceProvider.aggregate([
            {
                $group: {
                    _id: "$location.coordinates",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.json(demandData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get providers by minimum rating
const getProvidersByRating = async (req, res) => {
    const { minRating } = req.query;

    try {
        const providers = await ServiceProvider.find({ rating: { $gte: minRating } }).sort({ rating: -1 });
        res.json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Send notification to user
const sendUserNotification = async (req, res) => {
    const { userId, message } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.notifications.push({ message });
        await user.save();

        res.json({ message: 'Notification sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Dynamic fare calculation
const calculateFare = async (req, res) => {
    const { distance, time, weather } = req.body;

    try {
        const baseFare = 50;
        const distanceFare = distance * 10;
        const timeFare = time === 'peak' ? 20 : 10;
        const weatherFare = weather === 'rain' ? 15 : 0;
        const totalFare = baseFare + distanceFare + timeFare + weatherFare;

        res.json({ totalFare });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Update service log
const updateServiceLog = async (req, res) => {
    const { providerId, serviceId, status } = req.body;

    try {
        const provider = await ServiceProvider.findById(providerId);
        if (!provider) return res.status(404).json({ message: 'Provider not found' });

        const serviceLog = provider.serviceLogs.id(serviceId);
        if (!serviceLog) return res.status(404).json({ message: 'Service log not found' });

        serviceLog.status = status;
        await provider.save();

        res.json({ message: 'Service log updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Update acceptance status
const updateAcceptanceStatus = async (req, res) => {
    const { providerId, hasAcceptedRequest } = req.body;

    try {
        const provider = await ServiceProvider.findByIdAndUpdate(providerId, { hasAcceptedRequest }, { new: true });
        if (!provider) return res.status(404).json({ message: 'Provider not found' });

        res.json(provider);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Grievance Redressal System
const submitComplaint = async (req, res) => {
    const { userId, providerId, complaint } = req.body;

    try {
        const provider = await ServiceProvider.findById(providerId);
        if (!provider) return res.status(404).json({ message: 'Provider not found' });

        provider.complaints.push({ userId, complaint, status: 'pending' });
        await provider.save();

        res.json({ message: 'Complaint submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Respond to notification
const respondToNotification = async (req, res) => {
    const { providerId, notificationId, status } = req.body;

    try {
        const provider = await ServiceProvider.findById(providerId);
        if (!provider) return res.status(404).json({ message: 'Provider not found' });

        const notification = provider.notifications.id(notificationId);
        if (!notification) return res.status(404).json({ message: 'Notification not found' });

        notification.status = status;
        provider.isAvailable = status !== 'accepted'; // Update availability
        await provider.save();

        res.json({ message: `Request ${status}` });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


// get provide id
const getProviderById = async (req, res) => {
    try {
      const provider = await Provider.findOne({ user: req.user.id });
  
      if (!provider) {
        return res.status(404).json({ success: false, message: "Provider ID not found" });
      }
  
      res.status(200).json({ success: true, providerId: provider._id });
    } catch (error) {
      console.error("Error fetching provider:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };

  

module.exports = {
    getNearbyProviders,
    getServiceDemandHeatmap,
    getProvidersByRating,
    sendUserNotification,
    calculateFare,
    updateServiceLog,
    updateAcceptanceStatus,
    submitComplaint,
    respondToNotification,
    getProviderById
};
