const express = require('express')
const { getLastEpisode, getSpecificLastEpisode, getAllLastEpisodes, createLastEpisode, deleteLastEpisode, updateLastEpisode } = require('../controllers/lastEpisodeController')
const { getUpcomingEpisode, getSpecificUpcomingEpisode, getAllUpcomingEpisodes, createUpcomingEpisode, deleteUpcomingEpisode, updateUpcomingEpisode } = require('../controllers/upcomingEpisodeController')
const { getSubscriber, getSpecificSubscriber, getAllSubscribers, createNewSubscriber, deleteSubsciber, updateSubscriber } = require('../controllers/newSubscriberController')

const router = express.Router()


// -----------------------------------------------------------------------
// --------------------------- LAST EPISODES -----------------------------
// -----------------------------------------------------------------------
//GET last episode
router.get('/lastEpisode', getLastEpisode)

//GET specific last episode
router.get('/lastEpisode/:id', getSpecificLastEpisode)

//GET last episodes
router.get('/lastEpisodes', getAllLastEpisodes)

//POST create last episode object
router.post('/lastEpisodes/addNew', createLastEpisode)

//DELETE last episode
router.delete('/lastEpisodes/:id', deleteLastEpisode)

//UPDATE last episode
router.patch('/lastEpisodes/:id', updateLastEpisode)


// -----------------------------------------------------------------------
// --------------------------- UPCOMING EPISODES -------------------------
// -----------------------------------------------------------------------

//GET last upcoming episode
router.get('/upcomingEpisode', getUpcomingEpisode)

//GET specific upcoming episode
router.get('/upcomingEpisode/:id', getSpecificUpcomingEpisode)

//GET ALL upcoming episodes
router.get('/upcomingEpisodes', getAllUpcomingEpisodes)

//POST create upcoming episode object
router.post('/upcomingEpisodes/addNew', createUpcomingEpisode)

//DELETE upcoming episode
router.delete('/upcomingEpisodes/:id', deleteUpcomingEpisode)

//UPDATE upcoming episode
router.patch('/upcomingEpisodes/:id', updateUpcomingEpisode)



// -----------------------------------------------------------------------
// --------------------------- SUBSCRIBERS ----- -------------------------
// -----------------------------------------------------------------------
//GET last registered subscriber
router.get('/subscriber', getSubscriber)

//GET all registered subscribers
router.get('/subscriber/:id', getSpecificSubscriber)

//GET all registered subscribers
router.get('/subscribers', getAllSubscribers)


//POST register new subscriber
router.post('/subscribers/addNew', createNewSubscriber)

//DELETE subscriber
router.delete('/subscribers/:id', deleteSubsciber)

//UPDATE subscriber
router.patch('/subscribers/:id', updateSubscriber)



module.exports = router