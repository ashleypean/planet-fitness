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
  box-sizing: border-box;`
Container.displayName = 'Container'



export const Title = styled.h1`
  font-size: 2rem;`
Title.displayName = 'Title'



export const Subtitle = styled.h1`
  font-size: .8rem;`
Subtitle.displayName = 'Subtitle'



export const BackHome = styled(Link)`
  text-decoration: underline;
  color: lightgray;`
BackHome.displayName = 'BackHome'