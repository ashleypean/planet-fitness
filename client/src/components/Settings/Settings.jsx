import React from 'react'
import { connect } from 'react-redux'
import { Container, ToggleContainer, TextContainer, Title, ToggleStatus } from './Settings.styles'
import Switch from '@material-ui/core/Switch';
import * as actions from '../../redux/actions/actions'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'


const renderSettingsOptions = settings => (
  <ToggleContainer>
    <TextContainer>
      <Title>{settings.title}</Title>
      <ToggleStatus>{settings.enabled? 'Enabled': 'Disabled'}</ToggleStatus>
    </TextContainer>
    <Switch color='primary'/>
  </ToggleContainer>
)


export const Settings = (props) => {

  const settings = [
    {title: 'Notifications', enabled: false}, 
    {title: 'Goals', enabled: false}, 
    {title: 'Activity Alerts', enabled: false}, 
    {title: 'Workout Analysis', enabled: false}, 
    {title: 'Behavior Track', enabled: false}, 
    {title: 'Sounds & Beeps', enabled: false}, 
  ]

  return (
    <Container visible={true}>
      <Menu visible={props.menuVisibility} />

      <Header title={'Settings'}/>
      {settings.map(settingsObj => (renderSettingsOptions(settingsObj)))}
  
    </Container>
  )
}

const mapStateToProps = (state) => ({
  visibility: state.menu.visibleSettings, 
})

const mapDispatchToProps = (dispatch) => ({
  changeVisibility: i => dispatch(actions.changeSettingsVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
