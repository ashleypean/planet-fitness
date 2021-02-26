import React from 'react'
import { connect } from 'react-redux'
import { Container, Header, DayContainer, Day, WorkoutContainer, CheckBox, WorkoutDetails, ViewButton, WorkoutTime, WorkoutName } from './WorkoutSchedule.styles'
import menu from '../../images/icons/menu.svg'
import settingsIcon from '../../images/icons/settings.svg'

export const WorkoutSchedule = (props) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const workouts = [{title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}, {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false}]

  return (
    <Container>
      <Header>
        <img src={menu} alt="Menu"/>
        <p>Schedule</p>
        <img src={settingsIcon} alt="Settings" /> 
      </Header>

      <DayContainer>
        {days.map(day => <Day>{day}</Day>)}
      </DayContainer>


      {workouts.map(workout => (
        <WorkoutContainer>
          <CheckBox>&#10003;</CheckBox>
          <WorkoutDetails>
            <WorkoutName>{workout.title}</WorkoutName>
            <WorkoutTime>{`From ${workout.beginTime}:00 to ${workout.endTime}:00`}</WorkoutTime>
          </WorkoutDetails>
          <ViewButton>View</ViewButton>
        </WorkoutContainer>
      ))}

    </Container>
  )
}




const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSchedule)
