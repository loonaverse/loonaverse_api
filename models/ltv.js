const mongoose = require('mongoose');
const db = mongoose.connection
const ltvSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    contentId: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    era: {
        type: String,
        required: true,
    },
    members: {
        type: String,
        required: true,
    },
    blurred: {
        type: String,
        required: true,
    },
    songs: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    comments: {
        type: Number,
        required: true,
    },
});

const LTV = {};
const ERAs = []

db.on('open', (ref) => {
    db.db.listCollections().toArray((err, arr) => {
        if(err) {
            console.log(err)
        } else {
            arr.map(collection => {
                LTV[collection.name] = mongoose.model('LTV', ltvSchema, collection.name);
                ERAs.push(collection.name);
            })
        }
    })
})

module.exports.ltv = LTV;
module.exports.eras = ERAs;