const express = require('express');
const router = express.Router();
const request = require('request');
const apiController = require('../controllers/api-controller');

router.get('/api/recycle', apiController.recycling);

module.exports = router;