import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, ToggleContainer, TextContainer, Title, ToggleStatus } from './Settings.styles'
import Switch from '@material-ui/core/Switch';
import Header from '../Header/Header'
import Menu from '../Menu/Menu'






export const Settings = (props) => {
  const [settings, changeSettings] = useState([
    {title: 'Notifications', enabled: false}, 
    {title: 'Goals', enabled: false}, 
    {title: 'Activity Alerts', enabled: false}, 
    {title: 'Workout Analysis', enabled: false}, 
    {title: 'Behavior Track', enabled: false}, 
    {title: 'Sounds & Beeps', enabled: false}, 
  ])



  useEffect(() => {
    const storage = window.localStorage
    if(storage.getItem('settings')) {
      const newSettings = JSON.parse(storage.getItem('settings'))
      changeSettings(newSettings)
    }
  }, [])

  const handleClick = (e) => {
    const storage = window.localStorage
    const idx = Number(e.target.id)
    const newSettings = settings.map((item, i) => {
      if(i === idx) return {title: item.title, enabled: !item.enabled}
      else return item
    })

    changeSettings(newSettings)
    storage.setItem('settings', JSON.stringify(newSettings))
  }

  const renderSettingsOptions = (settings, idx) => (
    <ToggleContainer key={idx + 'a'}>
      <TextContainer>
        <Title>{settings.title}</Title>
        <ToggleStatus >
          {settings.enabled? 'Enabled': 'Disabled'}
        </ToggleStatus>
      </TextContainer>
      <Switch id={idx.toString()} color='primary' checked={settings.enabled} onClick={handleClick}/>
    </ToggleContainer>
  )

  return (
    <Container visible={true}>
      <Menu />

      <Header title={'Settings'}/>
      {settings.map((settingsObj, idx) => (renderSettingsOptions(settingsObj, idx)))}
  
    </Container>
  )
}



const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
