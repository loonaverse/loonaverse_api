const express = require('express');
const router = express.Router();
const loonatv = require('./loonatv');
const profile = require('./profile');

router.use('/loonatv', loonatv);
router.use('/profile', profile);

module.exports = router;