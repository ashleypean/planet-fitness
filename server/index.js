/* IMPORTS and DEPENDENCIES */
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
require('dotenv').config()

const app = express()
const PORT = 3001

//MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(session({
  secret: 'secretcode', 
  resave: true, 
  saveUninitialized: true
}))
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig-local')(passport)


//ROUTERS
app.use('/edit-profile', require('./routes/editProfile'))
app.use('/workouts', require('./routes/workout'))
app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))


//DATABASE
const client = require('./model/dbConfig')
client.connect()


app.listen(process.env.PORT ?? PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
