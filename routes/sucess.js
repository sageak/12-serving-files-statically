const express = require('express');
const successController = require('../controllers/successController');
const router = express.Router();

// /success => GET
router.get('/success', successController.getSuccess);

module.exports = router;
