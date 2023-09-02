const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game-controller');

router.post('/result', gameController.gameResult);

module.exports = router;
