const client = require('./model/dbConfig')
const bcrypt = require('bcrypt')
const query = require('./model/SQLCommands')
const localStrategy = require('passport-local').Strategy

module.exports = (passport) => {
  const user = {
    usernameField: 'email', 
    passwordField: 'password'
  }

  passport.use(
    new localStrategy(user, (username, password, done) => {
      const SQLCommand = `SELECT * FROM users WHERE email=$1`
      const data = [username]

      //Find user in database
      client.query(SQLCommand, data, (err, results) => {
        if(err) {
          console.log('error with query')
          return done(err)
        }
        if(results.rows.length <= 0) {
          console.log('different error')
          return done(null, false)
        }

        else if(results.rowCount > 0) {
          console.log('user found in database')
          const user = results.rows[0]

          bcrypt.compare(password, user.password, (err, res) => {
            if(err) done(err)
            if(res) {
              console.log('there is a response')
              done(null, {
                name: user.name, 
                user_id: user.user_id, 
                email: user.email
              })
            }else {
              done(null, false, {message: 'Incorrect password'})
            }
          })
        }
      })
    })
  )

  //Create cookie w/ user_id inside
  passport.serializeUser((user, done) => {
    done(null, user.user_id)
  })

  //Unravels cookie and returns user info from it 
  passport.deserializeUser((id, done) => {
    const SQLCommand = `SELECT name, email, user_id FROM users WHERE user_id = $1`
    client.query(SQLCommand, [id], (err, results) => {
      if(err) 
        return done(err)
      else if(!results.rowCount) 
        return done(err)
      else 
        done(null, results)
    })
  })

}

