const express = require('express');
const helmet = require('helmet');

const recipesRouter = require('./recipesRouter')

const server = express()

server.use(helmet())
server.use(express.json())

server.use(recipesRouter)

module.exports = server