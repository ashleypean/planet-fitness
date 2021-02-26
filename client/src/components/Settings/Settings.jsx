import React from 'react'
import menu from '../../images/icons/menu.svg'
import settingsIcon from '../../images/icons/settings.svg'
import { connect } from 'react-redux'
import { Container, Header, ToggleContainer, TextContainer, Title, ToggleStatus } from './Settings.styles'
import Switch from '@material-ui/core/Switch';

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
    <Container>
      <Header>
        <img src={menu} alt="Menu"/>
        <p>Settings</p>
        <img src={settingsIcon} alt="Settings" /> 
      </Header>

      {settings.map(settingsObj => (renderSettingsOptions(settingsObj)))}
  
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
