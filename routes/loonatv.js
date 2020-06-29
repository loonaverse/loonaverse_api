const express = require('express');
const router = express.Router();
const { ltv } = require('../models/ltv');
const { getList, filterMonth, filterDate, filterYear } = require('./utilities');


router.get('/', async (req, res) => {
    let errorThrown = false;
    let epList = await getList();
    epList.sort((a, b) => a.id - b.id)

    if(req.query.year && !errorThrown) {
        try {
            epList = await filterYear(req.query.year, epList);
        } catch (err) {
            errorThrown = true;
            res.status(400).send({ error: err })
        }
    }
    
    if(req.query.month && !errorThrown) {
        try {
            epList = await filterMonth(req.query.month, epList);
        } catch (err) {
            errorThrown = true;
            res.status(400).send({ message: err })
        }
    }
    
    if(req.query.date && !errorThrown) {
        try {
            epList = await filterDate(req.query.date, epList);
        } catch (err) {
            errorThrown = true;
            res.status(400).send({ error: err })
        }
    }

    if(Object.keys(req.query).length == 0 || req.query.page && !errorThrown) {
        let page = req.query.page ? parseInt(req.query.page) : 0;
        epList = epList.slice(50*page, 50*(page+1));
    }

    res.send(epList);
})

router.get('/era/:era', async (req, res) => {
    let episodes = await ltv[req.params.era].find();
    res.send(episodes)
})

router.get('/member/:member', async (req, res) => {
    let episodes = await getList();
    let member = req.params.member.toLowerCase();
    let memberEpisodes
    if(req.query.blurred == false) {
        // Don't display episodes if the member was blurred
        memberEpisodes = episodes.filter(ep => ep.members.toLowerCase().includes(member));
    } else {
        memberEpisodes = episodes.filter(ep => ep.members.toLowerCase().includes(member) || ep.blurred.toLowerCase().includes(member));
    }
    res.send(memberEpisodes);
})

module.exports = router;