// import packages
const express = require('express')
const cors = require('cors')

// import db
const db = require('../db/index')

// create server
const server = express()
// configure server
server.use(express.json())
server.use(cors())

// configure routing

// base route
server.get('/', async(req,res) => {
  console.log('Portfolio BE Base Route')
  res.json({ status: "SUCCESS", message: "Portfolio BE Base Route" })
})

// exports
module.exports = server