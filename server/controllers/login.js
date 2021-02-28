const client = require('../model/dbConfig')
const passport = require('passport')
const query = require('../model/SQLCommands')


const controller = {}

controller.addSession = (req, res, next) => {
  const { user_id, name, email } = req.user
  res.locals.user = {user_id, name, email}

  client.query(query.newSesssion, [user_id], (err, results) => {
    if(err) 
      res.status(500).send(false)
    else 
      next()
  })
}

controller.authenticateUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) res.status(500).send(false)
    if(!user) return res.status(404).send('User does not exist')
    else done(null, user)
    }
  )(req, res, next)
}

controller.logInUser = (req, res) => {
  req.login(req.user, (err) => {
    if(err) 
      res.status(500).send(req.isAuthenticated())
    else 
      res.status(200).send(res.locals.user)
  })
  
}

controller.checkForExistingSession = (req, res, next) => {
  req.isAuthenticated() ? res.status(200).send() : res.status(401).send('Unauthorized')
}

module.exports = controller;