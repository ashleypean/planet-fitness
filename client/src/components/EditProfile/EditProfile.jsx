import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, FormContainer, Input, RegisterButton, Label } from './EditProfile.styles'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'


const EditProfile = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: '', 
    email: '', 
    phone: '', 
    birthday: '', 
    gender: ''
  })

  const handleChange = async (e) => {
    const category = e.target.name 
    const inputVal = e.target.value
    setUserInfo({...userInfo, [category]: inputVal})
  }

  const saveChanges = (e) => {
    e.preventDefault()
    const storage = window.localStorage
    for(const key in userInfo) {
      storage.setItem(key.toString(), userInfo[key])
    }

  }


  
  useEffect(() => {
    const getFromLocalStorage = async () => {
      const storage = window.localStorage
      const obj = {}
    
      if(storage.length >= 5) {
        for(const key in userInfo) {
          const value = storage.getItem(key.toString())
          console.log(value)
          obj[key] = value
        }
        setUserInfo(obj)
      }
    }
    
    getFromLocalStorage()
  // eslint-disable-next-line
  },[])

  return (
    <Container>
      <Menu />

      <Header title={'Edit Profile'} />

      <FormContainer onSubmit={saveChanges} return false>
        <Input type="text" name="name" placeholder={"Name"} onChange={handleChange} required value={userInfo.name}/>
        <Input type="email" name="email" placeholder={"Email"} onChange={handleChange} value={userInfo.email}/>
        <Input type="tel" name="phone" placeholder={"Phone"} onChange={handleChange} value={userInfo.phone}/>
        <Label htmlFor="birthday">Birthday</Label>
        <Input type="date" name="birthday" placeholder={"Birthday"} onChange={handleChange} value={userInfo.birthday}/>
        <Label htmlFor="gender">Please enter M for male, F for female, or N for nonbinary</Label>
        <Input type="text" name="gender" placeholder="Gender" onChange={handleChange}value={userInfo.gender}/>
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

