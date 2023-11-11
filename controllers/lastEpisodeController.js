const LastEpisode = require('../models/LastEpisode')


//GET last episode
const getLastEpisode = async (req, res) => {
    const lastEpisode = LastEpisode.findOne({})
    res.stauts(200).json(lastEpisode)
}

//GET last specific episode
const getSpecificLastEpisode = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const lastEpisode = await LastEpisode.findOne({ _id: id })

    if (!lastEpisode) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(lastEpisode)
}

//GET all episodes
const getAllLastEpisodes = (req, res) => {
    const lastEpisodes = LastEpisode.find({}).sort({ createdAt: -1 })
    res.stauts(200).json(lastEpisodes)
}

//POST create last episode object
const createLastEpisode = async (req, res) => {
    const { title, youtubeLink, spotifyLink } = req.body

    try {
        const lastEpisode = await LastEpisode.create({ title, youtubeLink, spotifyLink })
        res.status(200).json(lastEpisode)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//DELETE last episodes
const deleteLastEpisode = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const lastEpisode = await LastEpisode.findOneAndDelete({ _id: id })

    if (!lastEpisode) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(lastEpisode)
}

//UPDATE last episodes
const updateLastEpisode = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const lastEpisode = await LastEpisode.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!lastEpisode) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(lastEpisode)
}

module.exports = { getLastEpisode, getSpecificLastEpisode, getAllLastEpisodes, createLastEpisode, deleteLastEpisode, updateLastEpisode }

