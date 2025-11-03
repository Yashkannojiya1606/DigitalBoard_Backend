const express = require('express');
const router = express.Router();
const { createEnquiry } = require('../controllers/enquiriesController');

router.post('/', createEnquiry);

module.exports = router;
