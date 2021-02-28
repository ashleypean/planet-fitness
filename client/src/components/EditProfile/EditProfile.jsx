import React from 'react'
import { connect } from 'react-redux'
import { Container, FormContainer, Input, RegisterButton } from './EditProfile.styles'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'


const EditProfile = (props) => {
  return (
    <Container>
      <Menu visible={props.menuVisibility} />

      <Header title={'Edit Profile'} />

      <FormContainer>
        <Input placeholder={"Username"} />
        <Input type="email" placeholder={"Email"} />
        <Input type="phone" placeholder={"Phone"} />
        <Input placeholder={"Birthday"} />
        <Input placeholder={"Gender"} />
        <RegisterButton>Save Changes</RegisterButton>
      </FormContainer>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

