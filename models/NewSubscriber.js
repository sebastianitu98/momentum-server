const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newSubscriber = new Schema({
    nameSurname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gdprConsent: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('NewSubscriber', newSubscriber)