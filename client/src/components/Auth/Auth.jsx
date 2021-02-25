import React from 'react'
import { connect } from 'react-redux'
import logo from '../../images/logo.png'
import {AuthContainer, ImageContainer, Logo, TitleContainer, Title, Subtitle, ButtonsContainer, SignInButton, Text, SignUpButton, GoogleAuth, FacebookAuth, AppleAuth}  from './Auth.styles'

export const Auth = (props) => {
  return (
    <AuthContainer>
      <ImageContainer><Logo src={logo} alt=""/></ImageContainer>

      <TitleContainer>
        <Title>Member Sign In</Title>
        <Subtitle>Your Fitness is Essential</Subtitle>
      </TitleContainer>


      <ButtonsContainer>
        <SignInButton>Sign In</SignInButton>
        <Text>Don't have an account yet?</Text>
        <SignUpButton>Sign Up</SignUpButton>
        <GoogleAuth>Continue with Google</GoogleAuth>
        <FacebookAuth>Continue with Facebook</FacebookAuth>
        <AppleAuth>Continue with Apple</AppleAuth>
      </ButtonsContainer>
    </AuthContainer>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

