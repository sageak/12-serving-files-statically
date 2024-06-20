const express = require('express');
const contactController = require('../controllers/contactController.js');
const router = express.Router();

// /contactus => GET
router.get('/contactus', contactController.getContactUs);

// /contactus => POST
router.post('/contactus', contactController.postContactUs);

module.exports = router;
