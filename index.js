const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const config = require('./utils/config')

app.use(express.json({limit: '1000mb'}))
app.use(express.urlencoded({extended:true, limit: '1000mb'}))
app.use(express.static('assets'))
app.post("/image/:id", async (req, res) => {
  const body = req.body
  const socketId = req.params.id
  io.to(socketId).emit('news', req.body.data)
  res.status(200).send({
    "status": "sent"
  })
})

app.get("/scripts/filesaver.js", (_req, res) => {
  res.sendFile(__dirname + "/node_modules/file-saver/dist/FileSaver.js")
})

app.get("/image/:id", async (req, res) => {
  const socketId = req.params.id
  io.to(socketId).emit('news', 'Hello!')
  res.send("Sent!")
})

app.get("/:id", async (_req, res) => {
  res.sendFile(__dirname + "/upload.html")
})

app.get('/', (_req, res) => {
  res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket) => {
  console.log("A user connected")
  console.log(socket.id)
})

http.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`)
})