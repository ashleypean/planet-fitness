import React from 'react'
import { connect } from 'react-redux'
import { Container, GoalsAchieved, GoalsAchievedSub, Date, EntryContainer, EntryText, DateEntry, DescriptionContainer, EntrySubtext, Data } from './Goals.styles'
import { Doughnut } from '@reactchartjs/react-chart.js'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'


export const Goals = (props) => {

  const goals =  [{
    date: 'Fri, Dec 23rd', 
    list: [{title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20, time: null}, {title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20, time: null}, {title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20,  time: null}, {title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20,  time: null}]
  }, 
  {
    date: 'Fri, Dec 24th', 
    list: [{title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20}, {title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20}, {title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20}, {title: 'Leg Extensions', type: 'resistance', sets: 2, reps: 20}]
  }, 
  ]

  return (
    <Container>
      <Menu visible={props.menuVisibility} />

      <Header title={'Goals'}/>

      <GoalsAchieved>3 out of 10</GoalsAchieved>
      <GoalsAchievedSub>Goals Achieved</GoalsAchievedSub>

     <Doughnut data={data} options={options}/>

      {goals.map(day => (
        <DateEntry>
          <Date>{day.date}</Date>
          {day.list.map(day => renderGoals(day))}
        </DateEntry>
      ))}

    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const renderGoals = (list) => (
  <EntryContainer>
    <DescriptionContainer>
      <EntryText>{list.title}</EntryText>
      <EntrySubtext>{list.type.toUpperCase()}</EntrySubtext>
    </DescriptionContainer>
    
    <Data>{list.time ?? `Sets: ${list.sets} Reps: ${list.reps}`}</Data>
  </EntryContainer>
)

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
