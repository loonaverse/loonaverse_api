const mongoose = require('mongoose');
const db = mongoose.connection;
const profileSchema = new mongoose.Schema({
    stage: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    reveal: {
        type: String,
        required: true,
    },
    debut: {
        type: String,
        required: true,
    },
    bday: {
        type: String,
        required: true,
    },
    birthPlace: {
        type: String,
        required: true,
    },
    bloodGrp: {
        type: String,
        required: true,
    },
    traineeDuration: {
        type: String,
        required: true,
    },
    nextGirlImg: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    sign: {
        type: String,
        required: true,
    },
    memNo: {
        type: String,
        required: true,
    },
    animal: {
        type: String,
        required: true,
    },
    color: {
        type: Object,
        required: true,
    },
    givenName: {
        type: String,
        required: true,
    },
    hashtags: {
        type: String,
        required: true,
    },
    teamPosition: {
        type: String,
        required: true,
    },
    charmPoint: {
        type: String,
        required: true,
    },
    goals: {
        type: String,
        required: true,
    },
    msgToOrbit: {
        type: String,
        required: true,
    },
    mv: {
        type: Array,
        required: true,
    },
    wd: {
        type: Array,
        required: true,
    },
    tv: {
        type: Array,
        required: true,
    },
});

const Profile = mongoose.model('Profile', profileSchema, 'profile')

module.exports.profile = Profile;