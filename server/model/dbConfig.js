const { Client } = require('pg')

const client = new Client({
  user: 'postgres', 
  password: 'Annasophia1!234', 
  host:'localhost', 
  port: 5433, 
  database: 'planet-fitness'
})

const connect = () => {
  client.connect()
  .then(() => console.log('connected to database'))
  .then(() => client.query('SELECT * from users'))
  .then(res => console.table(res.rows))
  .then(() => client.query('SELECT * from workouts'))
  .then(res => console.table(res.rows))
  .catch(e => console.error(e))
}


module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  },
  connect 
}