import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import user from '../../images/icons/white-user-outline.png'
import lock from '../../images/icons/lock.png'
import { LoginContainer, Title, SignInButton, Text, FormContainer, LoginRegisterSwitch, Switch, InputField }from './Login.styles'

const Login = (props) => {

  const [authOption, setAuthOption] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    return authOption === 'login' ? props.login({username, password}) : props.register({username, password, password2})
  }

  const LoginForm = (
    <FormContainer onSubmit={submitForm}>
      <InputField bg={user} placeholder="Username" onChange={e => setUsername(e.target.value)}/>
      <InputField bg={lock} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      <SignInButton>Sign In</SignInButton>
      <Text>Forgot Password?</Text>
    </FormContainer>
  )
  
  const RegisterForm = (
    <FormContainer onSubmit={submitForm}>
      <InputField bg={user} placeholder="Username" onChange={e => setUsername(e.target.value)}/>
      <InputField bg={lock} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      <InputField bg={lock}  placeholder="Confirm Password" onChange={e => setPassword2(e.target.value)}/>
      <SignInButton>Register</SignInButton>
      <Text>Already Have an Account?</Text>
    </FormContainer>
  )


  return (
    <LoginContainer >
      <Title>Planet Fitness</Title>

        <LoginRegisterSwitch>
          <Switch active={authOption === 'login'} onClick={() => setAuthOption('login')}>Login</Switch>
          <Switch active={authOption === 'register'} onClick={() => setAuthOption('register')}>Register</Switch>
        </LoginRegisterSwitch>

        {authOption === 'login' ? LoginForm : RegisterForm}
        <button onClick={() => props.changeAuthStatus()}>Change Status</button>

    </LoginContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(actions.requestLogin(user)), 
  register: user => dispatch(actions.registerNewUser(user)),
  changeAuthStatus: () => dispatch(actions.changeAuthStatus())
})



export default connect(null, mapDispatchToProps)(Login)



