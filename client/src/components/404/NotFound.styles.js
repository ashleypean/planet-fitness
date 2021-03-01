import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #424242;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  color: lightgray;
  font-family: Lato;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-size: 2rem;
`

export const Subtitle = styled.h1`
  font-size: .8rem;
`

export const BackHome = styled(Link)`
  text-decoration: underline;
  color: lightgray;
`