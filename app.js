const express = require('express')
const cors = require('cors')
const imageRouter = require('./controllers/image')
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/image", imageRouter)

module.exports = app