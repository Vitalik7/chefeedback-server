const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // author: {name: {type: String},
    //          avatar: {type: String}},
    theme: {type: String},
    text: { type: String},
    category: { type: String },
    typeComment: {type: Boolean},
    // likes: {type: Number, default: 0},
    date: {type: Date, default: Date.now},
    images: [{type: String}],
    // lat: { type: Number},
    // lng: { type: Number},
    
    month: { type: Number},
    priceObject: { type: String},
    payPriceObject: { type: String },
    seleryclient: { type: String},
    tax: { type: String },
    payMounth: { type: String}
});

module.exports = mongoose.model('Comment', userSchema)
