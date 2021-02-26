import styled from 'styled-components'

export const Container = styled.div`
  background: #424242;
  height: 100%;
  width: 100%;
  color: lightgray;
  font-family: Lato;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;
`

/* Toggle Styles */


export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  margin: 0;
`

export const ToggleStatus = styled.p`
  margin: 0;
`