import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Button, TextField, Typography} from '@material-ui/core'
import * as actions from '../actions/actions'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const inputField = e.target
    
    if(inputField.id === 'email') setEmail(inputField.value)
    else if(inputField.id === 'password') setPassword(inputField.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/login", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then(res => res.json())
    .then(res => res.loggedIn? props.changeAuthStatus(true): props.changeAuthStatus(false))
  }

  return (
    <div style={divStyles}>
      <Typography variant="h4">Planet Fitness Tracker App</Typography>
      <form style={formStyles} onSubmit={handleSubmit}>
        <TextField id="email" type="email" label="Email" required onChange={handleChange}/>
        <TextField  id="password" type="password" label="Password" required onChange={handleChange}/>
        <Button variant="contained" type="submit" color="primary">Log In</Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeAuthStatus: i => dispatch(actions.changeAuthStatus(i))
})

export default connect(null, mapDispatchToProps)(Login)

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