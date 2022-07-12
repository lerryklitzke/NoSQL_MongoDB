const express = require('express');
const router = express.Router();
const middle = require('../controllers/testControllers');

router.get('/test', middle.get);
router.post('/test', middle.post);
router.put('/test', middle.put);
router.delete('/test', middle.delete);

module.exports = router;