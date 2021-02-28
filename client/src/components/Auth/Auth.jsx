import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../images/logo.png'
import { AuthContainer, ImageContainer, Logo, TitleContainer, Title, Subtitle, ButtonsContainer, SignInButton, Text, SignUpButton, GoogleAuth, FacebookAuth, AppleAuth }  from './Auth.styles'

export const Auth = (props) => {
  return (
    <AuthContainer>
      <ImageContainer><Logo src={logo} alt=""/></ImageContainer>

      <TitleContainer>
        <Title>Member Sign In</Title>
        <Subtitle>Your Fitness is Essential</Subtitle>
      </TitleContainer>


      <ButtonsContainer>
        <Link to="/login"><SignInButton>Sign In</SignInButton></Link>
        <Text>Don't have an account yet?</Text>
        <Link to="/signup"><SignUpButton>Sign Up</SignUpButton></Link>
        <GoogleAuth>Continue with Google</GoogleAuth>
        <FacebookAuth>Continue with Facebook</FacebookAuth>
        <AppleAuth>Continue with Apple</AppleAuth>
      </ButtonsContainer>
    </AuthContainer>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

