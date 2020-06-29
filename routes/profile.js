const express = require('express');
const router = express.Router();

router.get('/:member', async (req, res) => {
    res.send('Route works!')
})

module.exports = router;