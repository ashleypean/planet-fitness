import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Container, Form, GoalInput, GoalDescription, SubmitButton, Label } from './GoalForm.styles'


/* new Goals object config 
  - array of objects 
  {
    title: title of goal
    descriptions: longer description of goal 
    landmarks/updates: array of updates about goal progress
    completed: show completed/notcompleted status
    goal_added: Date showing when the goal was created
    goal_completed: Date showing when the goal was achieved 
  }
*/



export default function GoalForm({openModal, setOpenModal}) {
  const goalRef = useRef('')
  const descriptionRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const goal = goalRef.current.value
    const description = descriptionRef.current.value
    console.log(goal, description)
    //NOTE: Need to send the data to the backend throw a redux-saga action
    setOpenModal(false)
  }

  const portal = (
    ReactDOM.createPortal(
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="">Goal</Label>
          <GoalInput type="text" ref={goalRef}/>
          <Label htmlFor="">Description</Label>
          <GoalDescription ref={descriptionRef}/>
          <SubmitButton>Add Goal</SubmitButton>
        </Form>
      </Container>, 
      document.getElementById('portal')
    )
  )

  return openModal? portal: null
}

