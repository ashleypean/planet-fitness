import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, DayContainer, Day, WorkoutContainer, CheckBox, WorkoutDetails, ViewButton, WorkoutTime, WorkoutName } from './WorkoutSchedule.styles'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

export const WorkoutSchedule = (props) => {
  const [schedule, setSchedule] = useState(data)
  const [selectedDate, setSelectedDate] = useState(0)

  const resetSchedule =  (e) => {
    const idx = Number(e.target.id)
    console.log(idx)

    const newSchedule = schedule
    console.log(newSchedule, newSchedule[idx].completed)

    newSchedule[idx].title = 'Nothing'
    newSchedule[idx].completed = !newSchedule[idx].completed
    console.log(newSchedule, newSchedule[idx].completed)
    setSchedule(newSchedule)
  }

  return (
    <Container>
      <Menu />

      <Header title={'Schedule'}/>

      <DayContainer>
        {days.map((day, idx) => (
        <Day  key={idx + 'a'} active={selectedDate === idx} onClick={() => setSelectedDate(idx)}>
          {day}
        </Day>
        ))}
      </DayContainer>


      {schedule.map((workout, idx) => workout.day === selectedDate? (
        <WorkoutContainer key={idx + 'a'}>
          <CheckBox id={idx} checked={workout.completed} onClick={resetSchedule} >&#10003;</CheckBox>
          <WorkoutDetails>
            <WorkoutName>{workout.title}</WorkoutName>
            <WorkoutTime>{`From ${workout.beginTime}:00 to ${workout.endTime}:00`}</WorkoutTime>
          </WorkoutDetails>
          <ViewButton>View</ViewButton>
        </WorkoutContainer>
      ): null)}

    </Container>
  )
}




const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const data = [
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: true, day: 0}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: true, day: 2}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: true, day: 3}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 4}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: true, day: 5}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 6}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 0}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 1}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 2}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 3}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: false, day: 4}, 
  {title: 'Treadmill', beginTime: 6, endTime: 7, completed: true, day: 5}]

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSchedule)
