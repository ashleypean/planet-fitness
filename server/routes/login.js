const express = require('express')
const router = express.Router()
const passport = require('passport')


router.post('/', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if(err) throw err
    if(!user) return res.status(404).send('User does not exist')

    req.login(user, err => {
      if(err) return err

      res.status(200).send({loggedIn: true, user})
    })
  })(req, res, next)
})

module.exports = router