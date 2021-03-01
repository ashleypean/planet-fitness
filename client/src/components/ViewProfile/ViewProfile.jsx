import React from 'react'
import Header from '../Header/Header'
import profilePic from '../../images/me.jpeg'
import { Container, UserDiv, UserDivImage,  DivText, Username, Text, Quote, Citation, CardContainer } from './ViewProfile.styles'
import ProfileCard from './ProfileCard/ProfileCard'
import Trophy from '../../images/icons/trophy.svg'
import Fire from '../../images/icons/fire.svg'
import Rocket from '../../images/icons/rocket.svg'
import Gear from '../../images/icons/gear.svg'
import Menu from '../Menu/Menu'

export const ViewProfile = (props) => {

  const cards = [
    {title: 'Goals', text: '67% Achieved', icon: Trophy},
    {title: 'Workout List', text: 'Get Started', icon: Rocket}, 
    {title: 'Weekly Stats', text: '+28% more reps', icon: Fire}, 
    {title: 'Settings', text: 'Change Settings', icon: Gear} 
  ]

  return (
    <Container>
      <Menu />
      <Header title={'Profile'}/>

      <UserDiv>
        <UserDivImage src={profilePic} alt="User profile "/>
        <DivText>
          <Username>Ashley Pean</Username>
          <Text>Member since 2021</Text>
          <Text>pean.ashley@gmail.com</Text>
        </DivText>
      </UserDiv>

      <Quote>
        “Your body can stand almost anything. It’s your mind that you have to convince.”
        <Citation> - Anonymous</Citation>
      </Quote>

      <CardContainer>
        {cards.map( (card, idx) => (
          <ProfileCard 
          idx={idx}
          title={card.title} 
          text={card.text} icon={card.icon} 
          key={idx + 'a'}/>
          
        ))}
      </CardContainer>

      
    </Container>
  )
}


export default ViewProfile


