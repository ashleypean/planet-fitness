import styled from 'styled-components'

export const Container = styled.div`
  background: #424242;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  color: lightgray;
  font-family: Lato;
  padding: 0 2rem;
  box-sizing: border-box;
`

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  margin: .8rem 0 1.2rem;
`

export const UserDivImage = styled.img`
  height: 100%;
  width: 33%;
  object-fit: cover;
`

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 66%;
  padding: 0 0 0 2rem;
  justify-content: space-evenly;
  align-items: center;
  gap: .6rem;
`

export const Username = styled.p`
  font-size: 1.8rem;
  margin: 0;
`

export const Text = styled.p`
  font-size: .8rem;
  margin: 0;
`

export const Quote = styled.blockquote`
  font-weight: 400;
  font-size: .8rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export const Citation = styled.cite`

`

export const CardContainer = styled.div`
  height: 60%;
  display: flex;
  flex-basis: 50%;
  flex-flow: row wrap;
  gap: 1rem;
`