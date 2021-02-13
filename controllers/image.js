const config = require('../utils/config')
const io = require('socket.io')(config.PORT)
const imageRouter = require('express').Router()

imageRouter.post("/:id", async (req, res) => {
  const socketId = req.params.id
  io.to(socketId).emit(req.data)
})

module.exports = imageRouter