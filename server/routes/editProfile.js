const express = require('express')
const router = express.Router()
const client = require('../model/dbConfig')

router.put('/', (req, res) => {
  const { name, email, user_id } = req.body 

  //CHANGE THIS TO ONLY UPDATE VALUES THAT HAVE CHANGED
  const SQLCommand1 = 'UPDATE users SET name = $1, email = $2 WHERE user_id = $3 RETURNING *' 
  const SQLCommand2 = 'UPDATE users SET name = $1  WHERE user_id = $2 RETURNING *' 
  const SQLCommand3 = 'UPDATE users SET email = $1 WHERE user_id = $2 RETURNING *' 
  const data = [name, email, user_id]

  client.query(SQLCommand1, data)
    .then(res => console.table(res.rows[0]))
    .then(() => res.status(200).send('User update successful'))
    .catch(e => {
      res.status(500).send(e.message)
    })

})

module.exports = router