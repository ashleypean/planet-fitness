import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  box-sizing: content-box;
  font-family: Lato;
`

export const TopContainer = styled.div`
  background: #999999;
  height: 50%;
  width: 100%;
  color: lightgray;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem 1rem;
  color: white;
`

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`

export const UserStats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 3rem 0 2rem;
`

export const StatsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
`

export const MainText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
`

export const Category = styled.p`
  font-size: .8rem;
  margin: 0;
  color: lightgrey;
`
export const DayContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: content-box;
  background: #424242;
`

export const Day = styled.div`
  height: 4.5rem;
  border-bottom: 1px solid lightgrey;
  margin: .5rem 0 .8rem;
  background: #424242;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 13%;
`

export const DateText = styled.p`
  color: lightgrey;
  margin: 0;
  text-align: center;
`

export const DayText = styled.p`
  color: white;
  margin: 0;
  text-align: center;
  margin: 0 0 .5rem;
`