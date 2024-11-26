const express = require('express')
const router = require('./routes/index')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

module.exports = server