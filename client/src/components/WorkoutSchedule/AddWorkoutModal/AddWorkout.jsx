import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Container, ExercisePicker, Title, DateInput, TimeInput, Form, AddButton } from './AddWorkout.styles'

export default function AddWorkoutModal({showModal, setShowModal}) {
  const exercise = useRef('')
  const date = useRef('')
  const time = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)
  }

  const portal = ReactDOM.createPortal(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Add a Workout</Title>
        <ExercisePicker ref={exercise}>
          {['array', 'of', 'options'].map((el, idx) => <option key={idx + 'a'}>{el}</option>)}
        </ExercisePicker>
        <DateInput type="date" ref={date}/>
        <TimeInput type="time" ref={time}/>
        <AddButton>Add to Schedule</AddButton>
      </Form>
    </Container>, 
    document.getElementById('portal')
  )
 
  return showModal? portal: null
}

//NOTE: Need to render array of workouts here so they can be available in the ExercisePicker component 

//Add conditional rendering to show reps/sets vs time 

//Add option to add extra notes/description to each workout event, then show it when the user clicks the 'view' button

//Add another time picker for start AND end time 

//Have add workout add to store and add to database through redux-saga action
