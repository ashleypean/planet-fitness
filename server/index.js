const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001
// const connectionString = 'postgres://postgres:postgres@localhost:5432/database';
const connectionString = 'http://127.0.0.1:53234/?key=766b6874-ca1d-4a45-b471-3d6fccf896f4'

'http://127.0.0.1:51492/?key=485f5e48-27a4-41e2-98c2-dc2f52ebd341'

app.use(express.json())
app.use(cors())

const { Client } = require('pg')
const client = new Client({
  user: 'postgres', 
  password: 'Annasophia1!234', 
  host:'localhost',
  port: 51492,
  database: 'planet-fitness',
})

client.connect()
  .then( () => console.log('Connected to database'))
  .catch(e => console.log(e))
  .finally(() => client.end())

app.post('/login', (req, res) => {
  console.log('login info')
  console.log(req.body)
})

app.post('/signup', async (req, res) => {
  const {name, email, password} = req.body
  console.log('request received')
  client.query('INSERT INTO USERS ($1, $2, $3)', [name, email, password])
  const results = await client.query('SELECT * FROM USERS')
  console.table(results.rows, 'results')
  console.log('done')
  res.status(200).send('Form data received')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})