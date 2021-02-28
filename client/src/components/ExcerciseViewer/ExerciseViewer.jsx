import React from 'react'
import { connect } from 'react-redux'
import { Container, VideoPlayer, WorkoutTitle, WorkoutInstructions, WorkoutDescription, WorkoutInstructionsContainer, ScheduleButton } from './ExerciseViewer.styles'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'


 const ExerciseViewer = (props) => {
  const instructions = ['Place hands on the hand bar.', 'Lift the weight while exhaling until your legs are almost straight', 'Keep back straight against the backrest', 'Reset and start again']
  return (
    <Container>
      <Menu visible={props.menuVisibility} />

      <Header title={'Name of Workout Goes Here'} />

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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseViewer)
