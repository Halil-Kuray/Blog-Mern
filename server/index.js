const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()


//conect db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)

// connect server

app.listen(process.env.PORT, () => console.log("server started"))