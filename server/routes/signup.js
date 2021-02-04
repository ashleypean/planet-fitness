const express = require('express')
const router = express.Router()
const client = require('../model/dbConfig')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const SQLQuery = require('../model/SQLCommands')
const {checkForExistingUser, addNewUser} = require('../controllers/signup')

router.post('/', checkForExistingUser, addNewUser, (req, res) => {
  res.status(200).send({message: res.locals.message})
})



module.exports = router