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
  .catch(e => console.error(e))
}


module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  },
  connect 
}