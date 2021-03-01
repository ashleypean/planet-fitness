import React, { useState } from 'react'
import { connect } from 'react-redux'
import LineChart from './Chart/Chart'
import {  TopContainer, UserInfo, UserName, UserStats, StatsCard, MainText, Category, DayContainer, Day, MainContainer, DayText, DateText } from './WorkoutStats.styles'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

export const WorkoutStats = (props) => {
  const stats = [{title: 'Time', stat: '01:59'}, {title: 'Total Reps', stat: '154'}, {title: 'Calories', stat: '634'}]

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [activeDay, setActiveDay] = useState(0)

  return (
    <MainContainer>
      <Menu />
      <TopContainer>
        <Header title={'Stats'}/>

        <UserInfo>
          <UserName>Ashley Pean</UserName>
          <UserStats>
            {stats.map((stat, idx) => (
              <StatsCard key={idx + 'a'}>
                <MainText>{stat.stat}</MainText>
                <Category>{stat.title}</Category>
              </StatsCard>
            ))}
          </UserStats>
        </UserInfo>
      </TopContainer>

      <DayContainer>
          {days.map((day, idx) => (
            <Day key={idx + 'a'} active={idx === activeDay} onClick={() => setActiveDay(idx)}>
              <DateText active={idx === activeDay}>{day}</DateText>
              <DayText active={idx === activeDay}>{24}</DayText>
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
