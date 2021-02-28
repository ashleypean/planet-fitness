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
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;
`

export const GoalsAchieved = styled.h1`
  color: #FCD900;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
`

export const GoalsAchievedSub = styled.p`
  color: lightgrey;
  font-size: .7rem;
  text-align: center;
  margin-bottom: 3rem;
`

export const DateEntry = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
`

export const Date = styled.p`
  color: lightgrey; 
  font-size: .6rem;
  text-align: center;
`

export const EntryContainer = styled.div`
  background: #333333;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0;
  padding: .3rem 0 1.2rem;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const EntryText = styled.p`
  color: white;
  font-size: 1rem;
`

export const EntrySubtext = styled.p`
  color: lightgrey;
  font-size: .6rem;
  margin: 0;
`

export const Data = styled.p`
  color: white;
  font-size: 1rem;
  align-self: flex-end;
`


