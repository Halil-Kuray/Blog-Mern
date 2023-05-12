const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const app = express()


//Conect db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)

//Routes
//app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)

//Connect server

app.listen(process.env.PORT, () => console.log("server started"))