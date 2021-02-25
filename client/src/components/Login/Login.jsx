import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'
import user from '../../images/icons/white-user-outline.png'
import lock from '../../images/icons/lock.png'
import { LoginContainer, Title, SignInButton, Text, FormContainer, LoginRegisterSwitch, Switch, InputField }from './Login.styles'

const Login = (props) => {


  return (
    <LoginContainer >
      <Title>Planet Fitness</Title>

        <LoginRegisterSwitch>
          <Switch>Login</Switch>
          <Switch>Register</Switch>
        </LoginRegisterSwitch>


        <FormContainer>
          <InputField bg={user} placeholder="Username"/>
          <InputField bg={lock} placeholder="Password"/>
          <InputField bg={lock}  placeholder="Confirm Password"/>
          <SignInButton>Sign In</SignInButton>
          <Text>Forgot Password?</Text>
        </FormContainer>
    </LoginContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  changeAuthStatus: i => dispatch(actions.changeAuthStatus(i))
})

export default connect(null, mapDispatchToProps)(Login)

// const LoginFormContainer = (
//   <FormContainer>
//     <InputField bg={user} placeholder="Username"/>
//     <InputField bg={lock} placeholder="Password"/>
//     <SignInButton>Sign In</SignInButton>
//     <Text>Forgot Password?</Text>
// </FormContainer>
// )

// const RegisterFormContainer = (
//   <FormContainer>
//     <InputField bg={user} placeholder="Username"/>
//     <InputField bg={lock} placeholder="Password"/>
//     <InputField bg={lock}  placeholder="Confirm Password"/>
//     <SignInButton>Register</SignInButton>
//     <Text>Already Have an Account?</Text>
// </FormContainer>
// )