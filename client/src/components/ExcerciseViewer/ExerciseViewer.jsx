import React from 'react'
import { Container, VideoPlayer, Header, WorkoutTitle, WorkoutInstructions, WorkoutDescription, WorkoutInstructionsContainer, ScheduleButton } from './ExerciseViewer.styles'
import menu from '../../images/icons/menu.svg'
import settings from '../../images/icons/settings.svg'

export default function ExerciseViewer() {
  const instructions = ['Place hands on the hand bar.', 'Lift the weight while exhaling until your legs are almost straight', 'Keep back straight against the backrest', 'Reset and start again']
  return (
    <Container>
      <Header>
        <img src={menu} alt="Menu"/>
        <p>Exercise</p>
        <img src={settings} alt="Settings" />        
      </Header>

      <VideoPlayer currentTime
 controls autoPictureInPicture="true" >
        Sorry, it seems your browser doesn't support emebedded videos.
      </VideoPlayer>

      <WorkoutTitle>Leg Extensions</WorkoutTitle>

      <WorkoutDescription>
        Muscles: Quadriceps (front of your thigh)
      </WorkoutDescription>

      <WorkoutInstructionsContainer>
        Instructions

        {instructions.map(el => <WorkoutInstructions>{el}</WorkoutInstructions>)}
      </WorkoutInstructionsContainer>

      <ScheduleButton>Add to Schedule</ScheduleButton>
    </Container>
  )
}
