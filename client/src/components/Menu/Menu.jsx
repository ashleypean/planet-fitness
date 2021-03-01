import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, MenuList, MenuItem, UserName, Member, UserPhoto, TopContainer, ExitButton } from './Menu.styles'
import Me from '../../images/me.jpeg'
import * as actions from '../../redux/actions/actions'

const Menu = (props) => {
  console.log('menu props: ', props)

  const menuOptions = ['Profile', 'Schedule', 'Find A Workout', 'Goals', 'QR Scanner', 'Statistics', 'Settings', 'Sign Out']
  const linkRoutes = ['/profile', '/workouts', '/workout/1', '/goals', '/scanner', '/stats', '/settings', '/signout' ]

  const portal =  ReactDOM.createPortal(
    <Container visible={props.visibility}>
      <TopContainer>
        <UserPhoto src={Me} />
        <ExitButton onClick={props.changeVisibility}>X</ExitButton>
      </TopContainer>
      
      <UserName>Ashley Pean</UserName>
      <Member>Member</Member>
      <MenuList>
        {menuOptions.map((name, idx) => (
        <Link to={linkRoutes[idx]} key={idx} onClick={props.changeVisibility}>
         <MenuItem key={idx + 'a'}>{name}</MenuItem>
        </Link>))}
      </MenuList>
    </Container>, 
    document.getElementById('portal')
  )

  return props.visibility? portal : null
}

const mapStateToProps = (state) => ({
  visibility: state.menu.visibleMenu, 
})

const mapDispatchToProps = (dispatch) => ({
  changeVisibility: i => dispatch(actions.changeMenuVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
