const NewSubscriber = require('../models/NewSubscriber')


//GET last subscriber
const getSubscriber = async (req, res) => {
    const lastSubscriber = NewSubscriber.findOne({})
    res.stauts(200).json(lastSubscriber)
}

//GET last specific subscriber
const getSpecificSubscriber = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces subscriber" })
    }

    const newSubscriber = await NewSubscriber.findOne({ _id: id })

    if (!newSubscriber) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(newSubscriber)
}

//GET all subscribers
const getAllSubscribers = (req, res) => {
    const newSubscriber = NewSubscriber.find({}).sort({ createdAt: -1 })
    res.stauts(200).json(newSubscriber)
}

//POST create subsriber
const createNewSubscriber = async (req, res) => {
    const { nameSurname, email, gdprConsent } = req.body

    try {
        const newSubscriber = await NewSubscriber.create({ nameSurname, email, gdprConsent })
        res.status(200).json(newSubscriber)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//DELETE subscriber
const deleteSubsciber = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const newSubscriber = await NewSubscriber.findOneAndDelete({ _id: id })

    if (!newSubscriber) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(newSubscriber)
}

//UPDATE subscriber
const updateSubscriber = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.stauts(404).json({ error: "Nu exista aces episod" })
    }

    const newSubscriber = await NewSubscriber.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!newSubscriber) {
        return res.status(400)
            .json({ error: "Nu exista acest episod" })
    }

    res.status(200).json(newSubscriber)
}

module.exports = { getSubscriber, getSpecificSubscriber, getAllSubscribers, createNewSubscriber, deleteSubsciber, updateSubscriber }

