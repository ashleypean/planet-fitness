import React from 'react'
import { connect } from 'react-redux'
import { Container, LogoImg } from './Header.styles'
import menu from '../../images/icons/menu.svg'
import logo from '../../images/icons/logo.svg'
import * as actions from '../../redux/actions/actions'

export const Header = (props) => {
  return (
    <Container>
      <img src={menu} alt="Menu" onClick={props.changeMenuVisibility}/>
      <p>{props.title}</p>
      <LogoImg src={logo} alt="Logo" />    
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeMenuVisibility: i => dispatch(actions.changeMenuVisibility()),
})

export default connect(null, mapDispatchToProps)(Header)
