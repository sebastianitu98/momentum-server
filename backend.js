require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/router')


//setup express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method, req)
    next()
})


//routes
app.use('/', routes)


//connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.port}`)
        })
        console.log('Connected to mongoDB')
    })
    .catch((error) => { console.log(error) })

