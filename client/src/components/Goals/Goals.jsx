import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, GoalsAchieved, GoalsAchievedSub, Date, EntryContainer, EntryText, DateEntry, DescriptionContainer, EntrySubtext, Data, Checkbox, AddNewGoal } from './Goals.styles'
import { Doughnut } from '@reactchartjs/react-chart.js'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import GoalForm from './GoalForm/GoalForm'

//phsyical, mental, emotional 


export const Goals = (props) => {
  const [goals, setGoals] = useState(goalsData)
  const [openModal, setOpenModal] = useState(false)


  const handleChange = (e, props) => {
    console.log('click')
    const indexes = e.target.id.split(' ')
    const dayIdx = Number(indexes[0])
    const listIdx = Number(indexes[1])

    const newGoals = goals
    newGoals[dayIdx].list[listIdx].completed = !newGoals[dayIdx].list[listIdx].completed 

    setGoals(newGoals)
  }

  const renderGoals = (list, dayIdx, listIdx) => (
    <EntryContainer key={listIdx + 'a'}>
      <Checkbox id={dayIdx + ' ' + listIdx} type="checkbox" onChange={handleChange}/>
      <DescriptionContainer>
        <EntryText>{list.title}</EntryText>
        <Data>{list.time ?? `Sets: ${list.sets} Reps: ${list.reps}`}</Data>
        <EntrySubtext>{'TYPE: ' + list.type.toUpperCase()}</EntrySubtext>
      </DescriptionContainer>
      
  
    </EntryContainer>
  )

  return (
    <Container>
      <GoalForm openModal={openModal} setOpenModal={setOpenModal}/>
      <Menu  />

      <Header title={'Goals'}/>

      <GoalsAchieved>3 out of 10</GoalsAchieved>
      <GoalsAchievedSub>Goals Achieved</GoalsAchievedSub>

     <Doughnut data={data} options={options}/>

    <AddNewGoal onClick={() => setOpenModal(true)}>Add A New Goal</AddNewGoal>

      {goals.map((day, dayIdx) => (
        <DateEntry key={dayIdx + 'a'}>
          <Date >{day.date}</Date>
          {day.list.map((day, listIdx) => renderGoals(day, dayIdx, listIdx))}
        </DateEntry>
      ))}

    </Container>
  )


}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

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

const goalsData =  [{
  date: 'Fri, Dec 23rd', 
  list: [
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    }, 
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },    
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },    
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },]
}, 
{
  date: 'Fri, Dec 24th', 
  list: [
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },    
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },    
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },    
    {
      title: 'Leg Extensions', 
      type: 'resistance', 
      sets: 2, 
      reps: 20, 
      time: null, 
    },
  ]
}, 
]


const options = {
  legend: {
    position: 'right', 
    align: 'center', 
    labels: {
      boxWidth: 20, 
      fontSize: 14,
      fontFamily: 'Lato',
    }
  }
}

const data = {
  labels: ['Weights', 'Cardio', 'Resistance', 'Stretch'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 33, 20, 55],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
      cutoutPercentage: 80
    },
  ],
}
export default connect(mapStateToProps, mapDispatchToProps)(Goals)
