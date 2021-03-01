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
  display: flex;
  flex-direction: column;`
Container.displayName = 'Container'



export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;`
Header.displayName = 'Header'



export const VideoPlayer = styled.video`
  dispay: block; 
  margin: 2rem auto;`
VideoPlayer.displayName = 'VideoPlayer'



export const WorkoutTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;`
WorkoutTitle.displayName = 'WorkoutTitle'



export const WorkoutInstructionsContainer = styled.ol``
WorkoutInstructionsContainer.displayName = 'WorkoutInstructionsContainer'



export const WorkoutInstructions = styled.li`
  font-size: .8rem;
  margin: .8rem 0;`
WorkoutInstructions.displayName = 'WorkoutInstructions'



export const WorkoutDescription = styled.p`
  font-size: .8rem;`
WorkoutDescription.displayName = 'WorkoutDescription'



export const ScheduleButton = styled.button`
  color: white;
  font-family: Arial;
  font-size: .8rem;
  background: #5D2D84;
  border: none;
  padding: .8rem 0;
  align-self: center;
  width: 80%;
  outline: none;`
ScheduleButton.displayName = 'ScheduleButton'