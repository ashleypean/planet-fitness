const express = require('express')
const router = express.Router()
const client = require('../model/dbConfig')
const SQLQuery = require('../model/SQLCommands')

router.put('/', (req, res) => {
  const { name, email, user_id } = req.body 

  client.query(SQLQuery.updateProfile, [name, email, user_id])
    .then(() => res.status(200).send('User update successful'))
    .catch(e => res.status(500).send(e.message))
})

module.exports = router