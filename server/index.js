/* IMPORTS and DEPENDENCIES */
const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const session = require('express-session')
const { Client } = require('pg')
require('dotenv').config()

const app = express()
const PORT = 3001

/* MIDDLEWARE */
app.use(express.json())
app.use(cors({
  credentials: true, 
  origin: 'http://localhost:3000' //<-- location of React app
}))
app.use(session({
  secret: 'secretcode', 
  resave: true, 
  saveUninitialized: true
}))
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig-local')(passport)
/* END OF MIDDLEWARE */

/* ROUTERS*/

app.use('/edit-profile', require('./routes/editProfile'))
app.use('/workouts', require('./routes/workout'))

/* END OF ROUTERS */

//Connect to database
const client = require('./model/dbConfig')
client.connect()


app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) throw err
    if(!user) return res.status(404).send('User does not exist')

    req.login(user, err => {
      if(err) return err

      res.status(200).send({loggedIn: true, user})
    })
  })(req, res, next)
})



app.post('/signup', (req, res) => {
  const {name, email, password} = req.body
  const user_id = uuidv4()

  function addNewUser(name, user_id, email, password) {
    const SQLCommand = 'INSERT INTO users(name, user_id, email, password) VALUES($1, $2, $3, $4) RETURNING *'
    //Hash and Salt password 
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      const data = [name, user_id, email, hashedPassword]
      const user = {
        name, 
        user_id,
        email,
        password: hashedPassword, 
      }
      if(err) res.status(500).send(err)
  
        //Add entry to database
        client
        .query(SQLCommand, data)
        .then(() => req.login(user, err => {
          if(err) return err
          res.status(200).send({loggedIn: true, user})
        }))
        .catch(e => res.status(500).send(e))
    })
  }

  checkForExistingUser(email)
    .then( foundUser => {
        //Check if user email already exists
      if(foundUser) {
        res.status(409).send('User already exists')
      }else {
        addNewUser(name, user_id,email, password)
      }
    })
})



function checkForExistingUser(email) {
  let found = false
  const SQLCommand = `SELECT * FROM users WHERE email=$1`
  const data = [email]
  return client
    .query(SQLCommand, data)
    //If user entry is returned, return true. Otherwise return false
    .then(res => res.rows[0]? true: false) 
    .catch(err => false)
}


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
