import styled from 'styled-components'

export const Container = styled.div`
  background: #424242;
  height: 100%;
  width: 100%;
  color: lightgray;
  font-family: Lato;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;
`

export const VideoPlayer = styled.video`
  dispay: block; 
  margin: 2rem auto;
`

export const WorkoutTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
`

export const WorkoutInstructionsContainer = styled.ol`

`

export const WorkoutInstructions = styled.li`
  font-size: .8rem;
  margin: .8rem 0;
`

export const WorkoutDescription = styled.p`
  font-size: .8rem;
`

export const ScheduleButton = styled.button`
  color: white;
  font-family: Arial;
  font-size: .8rem;
  background: #5D2D84;
  border: none;
  padding: .8rem 0;
  align-self: center;
  width: 80%;
  outline: none;
`