import React from 'react'
import {Button, TextField, Typography} from '@material-ui/core'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    fetch("http://localhost:3001/login", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
  }

  return (
    <div style={divStyles}>
      <Typography variant="h4">Planet Fitness Tracker App</Typography>
      <form style={formStyles} onSubmit={handleSubmit}>
        <TextField id="email" type="email" label="Email" required />
        <TextField  id="password" type="password" label="Password" required />
        <Button variant="contained" type="submit" color="primary">Log In</Button>
      </form>
    </div>
  )
}

export default Login

const divStyles = {
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '50%',
  width: '50%',
}

const formStyles = {
  border: '1px solid gray',
  height: '50%',
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'space-between', 
  alignItems: 'space-between', 
  margin: 'auto', 
  padding: '1.5rem 2rem',
}