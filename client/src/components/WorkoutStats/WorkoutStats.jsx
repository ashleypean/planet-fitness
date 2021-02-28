import React from 'react'
import { connect } from 'react-redux'
import LineChart from './Chart/Chart'
import {  TopContainer, UserInfo, UserName, UserStats, StatsCard, MainText, Category, DayContainer, Day, MainContainer, DayText, DateText } from './WorkoutStats.styles'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

export const WorkoutStats = (props) => {
  const stats = [{title: 'Time', stat: '01:59'}, {title: 'Total Reps', stat: '154'}, {title: 'Calories', stat: '634'}]

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <MainContainer>
      <Menu visible={props.menuVisibility} />
      <TopContainer>
        <Header title={'Stats'}/>

        <UserInfo>
          <UserName>Ashley Pean</UserName>
          <UserStats>
            {stats.map(stat => (
              <StatsCard>
                <MainText>{stat.stat}</MainText>
                <Category>{stat.title}</Category>
              </StatsCard>
            ))}
          </UserStats>
        </UserInfo>
      </TopContainer>

      <DayContainer>
          {days.map(day => (
            <Day>
              <DateText>{day}</DateText>
              <DayText>{24}</DayText>
            </Day>
          ))}
      </DayContainer>

      <LineChart />

    </MainContainer>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutStats)
