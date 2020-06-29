const mongoose = require('mongoose');
const db = mongoose.connection
const ltvSchemaData = require('./ltvSchema');
const ltvSchema = new mongoose.Schema(ltvSchemaData);

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