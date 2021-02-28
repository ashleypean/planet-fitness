import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, MenuList, MenuItem, UserName, Member, UserPhoto, TopContainer, ExitButton } from './Menu.styles'
import Me from '../../images/me.jpeg'
import * as actions from '../../redux/actions/actions'

const Menu = (props) => {
  const menuOptions = ['Profile', 'Workout', 'Activity', 'Goals', 'QR Scanner', 'Statistics', 'Settings', 'Sign Out']
  return (
    <Container visible={props.visibility}>
      <TopContainer>
        <UserPhoto src={Me} />
        <ExitButton onClick={props.changeVisibility}>X</ExitButton>
      </TopContainer>
      
      <UserName>Ashley Pean</UserName>
      <Member>Member</Member>
      <MenuList>
        {menuOptions.map((name, idx) => (
        <Link to="/" key={idx + 'a'}>
         <MenuItem key={idx + 'a'}>{name}</MenuItem>
        </Link>))}
      </MenuList>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  visibility: state.menu.visibleMenu, 
})

const mapDispatchToProps = (dispatch) => ({
  changeVisibility: i => dispatch(actions.changeMenuVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
