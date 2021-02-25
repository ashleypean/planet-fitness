import React from 'react'
import menu from '../../images/icons/menu.svg'
import settings from '../../images/icons/settings.svg'
import { Container, Header, FormContainer, Input, RegisterButton } from './EditProfile.styles'

const EditProfile = () => {
  return (
    <Container>
      <Header>
        <img src={menu} alt="Menu"/>
        <p>Edit Profile</p>
        <img src={settings} alt="Settings" />
      </Header>

      <FormContainer>
        <Input placeholder={"Username"} />
        <Input placeholder={"Email"} />
        <Input placeholder={"Phone"} />
        <Input placeholder={"Birthday"} />
        <Input placeholder={"Gender"} />
        <RegisterButton>Save Changes</RegisterButton>
      </FormContainer>
    </Container>
  )
}

export default EditProfile
