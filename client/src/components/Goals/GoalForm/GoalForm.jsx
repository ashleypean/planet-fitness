import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Form } from './GoalForm.styles'


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

  const handleSubmit = (e) => {

  }

  const portal = (
    ReactDOM.createPortal(
      <Container onClick={() => setOpenModal(false)}>
        <Form onSubmit={handleSubmit}>
  
        </Form>
      </Container>, 
      document.getElementById('portal')
    )
  )

  return openModal? portal: null
}

