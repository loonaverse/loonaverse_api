const express = require('express');
const router = express.Router();
const loonatv = require('./loonatv');
const profile = require('./profile');

router.get('/', (req, res) => {
    res.send( { 
        title: "loonaverse-api",
        endpoints: {
            "/loonatv": {
                desc: "Displays all LOONA TV episodes. Divided into pages.",
                parameters: {
                    "?page=X": "Takes to page X. Each page shows 50 entries. Type: Number. Default: 0. Optional.",
                    "?date=X": "Shows all LOONA TV episodes uploaded on date X. Type: Number. Range: 1 to 31. Optional.",
                    "?month=X": "Shows all LOONA TV episodes uploaded in month X. Type: Number or String. Range: (if Number: 1 to 12), (if String: 'jan' to 'dec' or 'january' to 'december'). Optional.",
                    "?year=XXXX": "Shows all LOONA TV episodes uploaded in the year X. Type: Number. Optional.",
                }
            },
            "/loonatv/era/:era": {
                desc: "Displays all LOONA TV episodes of the ':era' provided. Check eras on loonaverse.github.io.",
            },
            "/loonatv/member/:member": {
                desc: "Displays all LOONA TV episodes in which the ':member' was present.",
                parameters: {
                    "?blurred=X": "Filters episodes based on whether the member was blurred or not. Type: boolean. Default: true. Optional."
                }
            },
            "/profile": {
                desc: "Shows profiles for all members."
            },
            "/profile/:member": {
                desc: "Shows the profile of the ':member' provided."
            }
            
        }
     } ) 
})

router.use('/loonatv', loonatv);
router.use('/profile', profile);

module.exports = router;