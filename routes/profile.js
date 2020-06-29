const express = require('express');
const router = express.Router();
const { profile } = require('../models/profile');

router.get('/', async (req, res) => {
    let memberList = await profile.find();
    res.send(memberList);
})

router.get('/:member', async (req, res) => {
    let member = await profile.find({ id: req.params.member.toLowerCase() });
    res.send(member);
})

module.exports = router;