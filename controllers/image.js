const config = require('../utils/config')
const io = require('socket.io')(config.PORT)
const imageRouter = require('express').Router()

imageRouter.post("/:id", async (req, res) => {
  const socketid = request.params.id
})

module.exports = imageRouter