const client = require('./model/dbConfig')
const bcrypt = require('bcrypt')
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

      //Find
      client.query(SQLCommand, data, (err, results) => {
        if(err) return done(err)
        if(results.rows.length <= 0) return done(null, false)

        else if(results.rowCount > 0) {
          const user = results.rows[0]

          bcrypt.compare(password, user.password, (err, res) => {
            if(err) throw err
            if(res) {
              done(null, {
                name: user.name, 
                user_id: user.user_id, 
                email: user.email, 
                password: user.password 
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
    const SQLCommand = `SELECT name, email, id FROM users WHERE id = $1`
    client.query(SQLCommand, id, (err, results) => {
      if(err) return done(err)
      else done(null, results.rows[0])
    })
  })

}
