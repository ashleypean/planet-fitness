const { Query } = require("mongoose")

const query = {
  addUser: 'INSERT INTO users(name, user_id, email, password) VALUES($1, $2, $3, $4) RETURNING *', 
  updateProfile: 'UPDATE users SET name = $1, email = $2 WHERE user_id = $3 RETURNING *',
  checkForUser: 'SELECT * FROM users WHERE email=$1', 
  newSesssion: 'INSERT INTO sessions(_id, created_at) VALUES($1, now()) RETURNING *',
  checkForExistingSession: 'SELECT * FROM sessions WHERE _id=$1'
}

module.exports = query