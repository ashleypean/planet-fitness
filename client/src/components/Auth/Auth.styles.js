import styled from 'styled-components'

export const AuthContainer = styled.div`
  background: #242323;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  font-family: Arial;
  color: white;`
AuthContainer.displayName = 'AuthContainer'


export const ImageContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;`
ImageContainer.displayName = 'ImageContainer'



export const Logo = styled.img`
  width: 5rem;
  height: 5rem;`
Logo.displayName = 'Logo'



export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`
TitleContainer.displayName = 'TitleContainer'



export const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;`
Title.displayName = 'Title'



export const Subtitle = styled.h2`
  font-weight: 400;`
Subtitle.displayName = 'Subtitle'



export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25rem;
  gap: .8rem;`
ButtonsContainer.displayName = 'ButtonsContainer'



export const SignInButton = styled.button`
  color: white;
  font-size: 1rem;
  background: #5D2D84;
  border: none;
  height: 3rem;
  width: 20rem;`
SignInButton.displayName = 'SignInButton'



export const Text = styled.p``
Text.displayName = 'Text'



export const SignUpButton = styled.button`
  border: 1px solid yellow;
  background: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;`
SignUpButton.displayName = 'SignUpButton'



export const GoogleAuth = styled.button`
  background: #DE5246;
  border: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;`
GoogleAuth.displayName = 'GoogleAuth'


export const FacebookAuth = styled.button`
  background: #4267B2;
  border: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;`
FacebookAuth.displayName = 'FacebookAuth'


export const AppleAuth = styled.button`
  background: black;
  border: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;`
AppleAuth.displayName = 'AppleAuth'