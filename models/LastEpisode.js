const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lastEpisode = new Schema({
    title: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
        required: true
    },
    spotifyLink: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('LastEpisode', lastEpisode)