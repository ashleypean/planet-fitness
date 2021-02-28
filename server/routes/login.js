const express = require('express')
const router = express.Router()
const passport = require('passport')
const loginController = require('../controllers/login')

router.get('/', loginController.checkForExistingSession)

router.post('/', passport.authenticate('local'), loginController.addSession, loginController.logInUser)

module.exports = router