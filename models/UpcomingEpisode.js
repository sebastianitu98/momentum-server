const mongoose = require('mongoose')

const Schema = mongoose.Schema

const upcomingEpisode = new Schema({
    eventTitle: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('UpcomingEpisode', upcomingEpisode)