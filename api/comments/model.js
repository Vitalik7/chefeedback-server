const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    text: { type: String},
    category: { type: String},
    likes: {type: Number, default: 0},
    date: {type: Date, default: Date.now},
    image: {type: String},
    lng: { type: Number, required: true },
    lat: { type: Number, required: true }
});

module.exports = mongoose.model('Comment', userSchema)
