const express = require('express');
const { addUserQueue, transmitPackets } = require('../controllers/fairQueueController');
const router = express.Router();

router.post('/add-user', addUserQueue);
router.get('/transmit', transmitPackets);

module.exports = router;
