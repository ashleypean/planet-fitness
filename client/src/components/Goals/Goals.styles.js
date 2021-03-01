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



export const GoalsAchieved = styled.h1`
  color: #FCD900;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;`
GoalsAchieved.displayName = 'GoalsAchieved'



export const GoalsAchievedSub = styled.p`
  color: lightgrey;
  font-size: .7rem;
  text-align: center;
  margin-bottom: 3rem;`
GoalsAchievedSub.displayName = 'GoalsAchievedSub'



export const DateEntry = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;`
DateEntry.displayName = 'DateEntry'



export const Date = styled.p`
  color: lightgrey; 
  font-size: .6rem;
  text-align: center;`
Date.displayName = 'Date'



export const EntryContainer = styled.div`
  background: #333333;
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  padding: 1rem 1rem 1.2rem;`
EntryContainer.displayName = 'EntryContainer'



export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  gap: .5rem;`
DescriptionContainer.displayName = 'DescriptionContainer'



export const EntryText = styled.p`
  color: white;
  font-size: 1rem;
  margin: 0;`
EntryText.displayName = 'EntryText'



export const EntrySubtext = styled.p`
  color: lightgrey;
  font-size: .6rem;
  margin: 0;`
EntrySubtext.displayName = 'EntrySubtext'



export const Data = styled.p`
  color: white;
  font-size: .8rem;
  margin: 0;`
Data.displayName = 'Data'



export const AddNewGoal = styled.p`
  color: white;
  font-size: .8rem;
  text-align: center;
  border: none;
  background: #56297B;
  border-radius: 4px;
  width: 40%;
  padding: 1rem 2rem;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;`
AddNewGoal.displayName = 'AddNewGoal'



export const Checkbox = styled.input`
  border: none;
  background: ${props => props.type === 'completed'? 'yellow': 'gray'};
  color: white;
  align-self: center;
  margin-top: 1rem;`
Checkbox.displayName = 'Checkbox'



export const Delete = styled.button``
Delete.displayName = 'Delete'