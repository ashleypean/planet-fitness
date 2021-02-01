import React from 'react'
import {Button, TextField, Typography} from '@material-ui/core'
const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    fetch("http://localhost:3001/signup", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password})
    })
  }


  return (
    <div style={divStyles}>
      <Typography variant="h4">Planet Fitness Tracker App</Typography>
      <form id="sign-up" style={formStyles} onSubmit={handleSubmit} >
        <TextField type="text" id="name" label="Name" required />
        <TextField type="email" id="email" label="Email" required />
        <TextField  id="password" type="password" name="password" label="password" required />
        <Button variant="contained" type="submit" color="primary"> Sign Up</Button>
      </form>
    </div>
  )
}

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

export default SignUp