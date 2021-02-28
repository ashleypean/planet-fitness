import styled from 'styled-components'

export const Container = styled.div`
  background: #424242;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  color: lightgray;
  font-family: Lato;
  padding: 0 1rem;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  visibility: ${props => props.visible? 'visible' : 'hidden'};
  z-index: ${props => props.visible? 2 : -1};
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