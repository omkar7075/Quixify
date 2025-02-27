const express = require('express');
const {
    getNearbyProviders,
    getServiceDemandHeatmap,
    getProvidersByRating,
    sendUserNotification,
    calculateFare,
    updateServiceLog,
    updateAcceptanceStatus,
    submitComplaint,
    respondToNotification,
    getProviderById, // ✅ Added this function
} = require('../controllers/serviceController');
//const { protect } = require("../middlewares/authMiddleware");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.get('/providers/nearby', getNearbyProviders);
router.get('/providers/heatmap', getServiceDemandHeatmap);
router.get('/providers/rating', getProvidersByRating);
router.get('/providers/me',auth, getProviderById); // ✅ Fix: Add this route
router.post('/notifications/user', sendUserNotification);
router.post('/fare/calculate', calculateFare);
router.post('/complaints/submit', submitComplaint);
router.put('/providers/service-log', updateServiceLog);
router.put('/providers/acceptance', updateAcceptanceStatus);
router.put('/providers/notifications/respond', respondToNotification);

module.exports = router;
