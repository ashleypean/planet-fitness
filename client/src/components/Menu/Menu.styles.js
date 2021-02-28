import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  background: #56297B;
  justify-self: start;
  font-family: Lato;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  visibility: ${props => props.visible? 'visible' : 'hidden'};
  z-index: ${props => props.visible? 2 : -1};
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
`

export const ExitButton = styled.button`
  border: none;
  background: none;
  color: white;
  align-self: flex-start;
  margin: 4rem 2rem 1rem 0;

`

export const UserPhoto = styled.img`
  height: 4rem;
  width: 4rem;
  margin: 3rem 2.3rem .5rem;
  align-self: flex-start;
`

export const UserName = styled.h1`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 1rem 2.3rem;
`



export const Member = styled.p`
  margin: 0 2.3rem;
  color: lightgrey;
`

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 2.2rem 0 0;
`

export const MenuItem = styled.li`
  list-style-type: none;
  color: white;
  margin: 1.8rem 0;
`