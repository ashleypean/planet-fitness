const client = require('../model/dbConfig')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const SQLQuery = require('../model/SQLCommands')


const controller = {}

controller.addNewUser = async (req, res, next) => {
  const {name, email, password} = req.body
  const user_id = uuidv4()

  console.log('adding a new user')

  await bcrypt.hash(password, 10, (err, hashedPassword) => {
    if(err) res.status(500).send(err)

    const user = {
      name, 
      user_id, 
      email, 
      password: hashedPassword,
    }

    console.log([name, user_id, email, hashedPassword])

    client.query(SQLQuery.addUser, [name, user_id, email, hashedPassword])
      .then( () => req.login(user, err => {
        if(err) return err
        res.locals.message = {loggedIn: true, user}
      })).then( () => {
        next()
      }).catch(e => res.status(500).send(e))
  })
  
}

controller.checkForExistingUser = (req, res, next) => {

  console.log('checking for existing user')
  const email = req.body.email

  client.query(SQLQuery.checkForUser, [email])
    //If user entry is returned, move to the  next function. Otherwise return error status
    .then(data => {  
      if(data.rows.length > 0) res.status(409).send('User already exists')
      else next()
    })
    .catch(err => console.log(err))
}

module.exports = controller