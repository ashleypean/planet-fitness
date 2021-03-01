import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  box-sizing: content-box;
  font-family: Lato;`
MainContainer.displayName = 'MainContainer'



export const TopContainer = styled.div`
  background: #999999;
  height: 50%;
  width: 100%;
  color: white;
  padding: 0 1rem;
  box-sizing: border-box;`
TopContainer.displayName = 'TopContainer'



export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem 1rem;
  color: white;`
UserInfo.displayName = 'UserInfo'



export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 400;`
UserName.displayName = 'UserName'



export const UserStats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 3rem 0 2rem;`
UserStats.displayName = 'UserStats'



export const StatsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;`
StatsCard.displayName = 'StatsCard'



export const MainText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin: 0;` 
MainText.displayName = 'MainText'



export const Category = styled.p`
  font-size: .8rem;
  margin: 0;
  color: lightgrey;`
Category.displayName = 'Category'



export const DayContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: content-box;
  background: #424242`
DayContainer.displayName = 'DayContainer'



export const Day = styled.div`
  height: 4.5rem;
  border-bottom: ${props => props.active? '1px solid yellow' : '1px solid lightgrey'};
  margin: .5rem 0 .8rem;
  background: #424242;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 13%;`
Day.displayName = 'Day'



export const DateText = styled.p`
  color: ${props => props.active? 'yellow' : 'lightgrey'};
  margin: 0;
  text-align: center;`
DateText.displayName = 'DateText'



export const DayText = styled.p`
  color: ${props => props.active? 'yellow' : 'lightgrey'};
  margin: 0;
  text-align: center;
  margin: 0 0 .5rem;`
DayText.displayName = 'DayText'