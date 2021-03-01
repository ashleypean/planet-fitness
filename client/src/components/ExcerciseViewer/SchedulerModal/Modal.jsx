import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Container, DateInput, AddButton } from './Modal.styles'
import moment from 'moment'

const Modal = (props) => {
  const { openModal, setOpenModal, workoutInfo } = props
  const [selectedDate, setSelectedDate] = useState()


  const handleDate = (e) => { 
    const date = new Date(e.target.value)
    setSelectedDate(date)
  }

  const handleSubmit = (e) => {
    //NOTE: Add functionality to send the data back to the Redux store and store it in the database
    setOpenModal(false)
  }

  const portal = ReactDOM.createPortal(
    <Container >
        <DateInput type="datetime-local" onChange={handleDate} autoFocus required />
        <AddButton onClick={handleSubmit}>Add</AddButton>
    </Container>, 
    document.getElementById('portal')
  )

  return openModal? portal: null
}

export default Modal


{/* <MuiPickersUtilsProvider utils={MomentUtils}>
<DateTimePicker onChange={handleDate} formatDate={handleDate} showTodayButton={true} value={selectedDate} format='ddd ll HH:MM A' inputValue={inputValue}/>
</MuiPickersUtilsProvider> */}