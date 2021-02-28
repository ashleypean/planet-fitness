import styled from 'styled-components'

export const AuthContainer = styled.div`
  background: #242323;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  font-family: Arial;
  color: white;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
`

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
`

export const Subtitle = styled.h2`
  font-weight: 400;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25rem;
  gap: .8rem;
`

export const SignInButton = styled.button`
  color: white;
  font-size: 1rem;
  background: #5D2D84;
  border: none;
  height: 3rem;
  width: 20rem;
`

export const Text = styled.p`

`

export const SignUpButton = styled.button`
  border: 1px solid yellow;
  background: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;
`

export const GoogleAuth = styled.button`
  background: #DE5246;
  border: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;
`
export const FacebookAuth = styled.button`
  background: #4267B2;
  border: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;
`
export const AppleAuth = styled.button`
  background: black;
  border: none;
  color: white;
  font-size: 1rem;
  height: 3rem;
  width: 20rem;
`