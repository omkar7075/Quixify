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
    respondToNotification
} = require('../controllers/serviceController');

const router = express.Router();

router.get('/providers/nearby', getNearbyProviders);
router.get('/providers/heatmap', getServiceDemandHeatmap);
router.get('/providers/rating', getProvidersByRating);
router.post('/notifications/user', sendUserNotification);
router.post('/fare/calculate', calculateFare);
router.post('/complaints/submit', submitComplaint);
router.put('/providers/service-log', updateServiceLog);
router.put('/providers/acceptance', updateAcceptanceStatus);
router.put('/providers/notifications/respond', respondToNotification);

module.exports = router;
