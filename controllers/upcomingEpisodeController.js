const UpcomingEpisode = require('../models/UpcomingEpisode')


//GET last upcoming episode
const getUpcomingEpisode = async (req, res) => {
    const upcomingEpisode = UpcomingEpisode.findOne({})
    res.stauts(200).json(upcomingEpisode)
}

//GET specific upcoming epuisode
const getSpecificUpcomingEpisode = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const upcomingEpisode = await UpcomingEpisode.findOne({ _id: id })

    if (!upcomingEpisode) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(upcomingEpisode)
}

//GET all upcoming episodes
const getAllUpcomingEpisodes = (req, res) => {
    const upcomingEpisode = UpcomingEpisode.find({}).sort({ createdAt: -1 })
    res.stauts(200).json(upcomingEpisode)
}

//POST create upcoming episode object
const createUpcomingEpisode = async (req, res) => {
    const { eventDate, eventTitle } = req.body

    try {
        const upcomingEpisode = await upcomingEpisode.create({ eventDate, eventTitle })
        res.status(200).json(upcomingEpisode)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//DELETE upcoming episode
const deleteUpcomingEpisode = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const upcomingEpisode = await UpcomingEpisode.findOneAndDelete({ _id: id })

    if (!upcomingEpisode) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(upcomingEpisode)
}

//UPDATE upcoming episode
const updateUpcomingEpisode = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const upcomingEpisode = await UpcomingEpisode.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!upcomingEpisode) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(upcomingEpisode)
}

module.exports = { getUpcomingEpisode, getSpecificUpcomingEpisode, getAllUpcomingEpisodes, createUpcomingEpisode, deleteUpcomingEpisode, updateUpcomingEpisode }

