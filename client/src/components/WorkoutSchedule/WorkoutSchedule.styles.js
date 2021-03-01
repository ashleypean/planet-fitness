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



export const DayContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: content-box;`
DayContainer.displayName = 'DayContainer'



export const Day = styled.p`
  color: ${props => props.active ? 'yellow': 'lightgrey'};
  border-bottom: ${props => props.active ? '1px solid yellow': '1px solid lightgrey'};
  padding: 0 .7rem 1.5rem .7rem;`
Day.displayName = 'Day'



export const AddWorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;`
AddWorkoutContainer.displayName = 'AddWorkoutContainer'



export const AddWorkoutButton = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 1.4rem;
  outline: none;`
AddWorkoutButton.displayName = 'AddWorkoutButton'



export const WorkoutContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #CCCCCC;`
WorkoutContainer.displayName = 'WorkoutContainer'



export const CheckBox = styled.button`
  border-radius: 0%;
  height: 1rem;
  color: ${props => props.checked? '#783AAA': 'white'};
  border:  ${props => props.checked? '2px solid #783AAA': '2px solid white'};
  background: none;
  font-size: .6rem;
  align-self: center;
  outline: none;`
CheckBox.displayName = 'CheckBox'



export const WorkoutDetails = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  height: 100%;
  margin: 0;
  padding: 0 .5rem;
  gap: .4rem;`
WorkoutDetails.displayName = 'WorkoutDetails'



export const WorkoutName = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  padding: 0 .3rem;`
WorkoutName.displayName = 'WorkoutName'



export const WorkoutTime = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: .6rem;
  padding: 0 .3rem;`
WorkoutTime.displayName = 'WorkoutTime'



export const ViewButton = styled.button`
  color: white; 
  border: none;
  align-self: center;
  background: #783AAA;
  border-radius: 4px;
  font-size: .6rem;
  height: 1.2rem;
  padding: 0 .6rem;
  outline: none;`
ViewButton.displayName = 'ViewButton'