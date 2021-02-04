const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const client = require('../model/dbConfig')


router.get('/', (req, res) => {
  const SQLCommand = 'SELECT * FROM workouts'
  const data = ['ca2d944a-0aa7-441d-8eff-e54b39787b93']

  client.query(SQLCommand)
    .then(workouts => {
      console.log(workouts.rows)
      res.status(200).send(workouts.rows)
    })
    .catch(e => console.log(e))
})

router.get('/:user_id', (req, res) => {
  const SQLCommand = 'SELECT * FROM workouts WHERE user_id=$1'
  const data = [req.params.user_id]

  console.log(req.params.user_id)

  client.query(SQLCommand, data)
    .then(workouts => {
      console.table(workouts.rows)
      res.status(200).send(workouts.rows)
    }).catch(err => res.status(500).send(err))
})


router.post('/add', (req, res) => {
  const {name, user_id, workout_id, type, time, weight, barcode, sets, reps, date, avgSpeed} = req.body || null
  

  const SQLCommand = 'INSERT INTO workouts(workout_name, user_id, workout_id, workout_type, time, weight, barcode, sets, reps, date, avg_speed) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *'
  const data = [name, user_id, workout_id, type, time, weight, barcode, sets, reps, date, avgSpeed]

  client.query(SQLCommand, data)
    .then(workout => {
      console.table(workout)
      res.status(201).send(data)
    }).catch( err => res.status(500).send(err))

})

router.put('/update/:id', (req, res) => {
  const {name, user_id, workout_id, type, time, weight, barcode, sets, reps, date, avgSpeed} = req.body || null
  
  const SQLCommand = 'UPDATE workouts SET workout_name = $1, user_id = $2, workout_type = $3, time = $4, weight = $5, barcode = $6, sets = $7, reps = $8, date = $9, avg_speed = $10 WHERE workout_id = $11 RETURNING *'
  const data = [name, user_id, type, time, weight, barcode, sets, reps, date, avgSpeed, workout_id]

  client.query(SQLCommand, data)
    .then(workout => {
      console.table(workout.rows)
      res.status(200).send('Update successful')
    }).catch(e => {
      res.status(500).send(e.message)
    })

})

module.exports = router