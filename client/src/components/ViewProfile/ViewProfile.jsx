import React from 'react'
import menu from '../../images/icons/menu.svg'
import settings from '../../images/icons/settings.svg'
import profilePic from '../../images/me.jpeg'
import { Container, Header, UserDiv, UserDivImage,  DivText, Username, Text, Quote } from './ViewProfile.styles'


export const ViewProfile = (props) => {
  return (
    <Container>
      <Header>
        <img src={menu} alt="Menu"/>
        <p>Edit Profile</p>
        <img src={settings} alt="Settings" />        
      </Header>

      <UserDiv>
        <UserDivImage src={profilePic} alt="User profile "/>
        <DivText>
          <Username>Ashley Pean</Username>
          <Text>Member since 2021</Text>
          <Text>pean.ashley@gmail.com</Text>
        </DivText>

      </UserDiv>
    </Container>
  )
}




export default ViewProfile


