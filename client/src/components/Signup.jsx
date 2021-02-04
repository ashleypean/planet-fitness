import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import {Button, TextField, Typography} from '@material-ui/core'


const SignUp = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const inputField = e.target
    
    if(inputField.id === 'name') setName(inputField.value)
    else if(inputField.id === 'email') setEmail(inputField.value)
    else if(inputField.id === 'password') setPassword(inputField.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/signup", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password})
    }).then(res => res.json())
      .then(res => {
        props.addUser(res.user)
        res.loggedIn? props.changeAuthStatus(true): props.changeAuthStatus(false)
      })
  }


  return (
    <div style={divStyles}>
      <Typography variant="h4">Planet Fitness Tracker App</Typography>
      <form id="sign-up" style={formStyles} onSubmit={handleSubmit} >
        <TextField type="text" id="name" label="Name" required onChange={handleChange}/>
        <TextField type="email" id="email" label="Email" required onChange={handleChange}/>
        <TextField  id="password" type="password" label="password" required onChange={handleChange}/>
        <Button variant="contained" type="submit" color="primary"> Sign Up</Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeAuthStatus: i => dispatch(actions.changeAuthStatus(i)),
  addUser: i => dispatch(actions.addUser(i))
})

export default connect(null, mapDispatchToProps)(SignUp)

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