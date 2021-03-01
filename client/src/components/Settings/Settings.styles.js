import styled from 'styled-components'

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



export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;`
Header.displayName = 'Header'



/* Toggle Styles */

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;`
ToggleContainer.displayName = 'ToggleContainer'



export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;`
TextContainer.displayName = 'TextContainer'



export const Title = styled.h3`
  margin: 0;`
Title.displayName = 'Title'



export const ToggleStatus = styled.p`
  margin: 0;`
ToggleStatus.displayName = 'ToggleStatus'