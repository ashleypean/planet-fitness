import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CardTitle, Container, Icon, Subtext } from './ProfileCard.styles'


export const ProfileCard = (props) => {
  const history = useHistory()
  const cardLinks = ['/goals', '/schedule', '/stats', 'settings']
  const handleClick = () => {
    history.push(cardLinks[props.idx])
  }

  return (
    <Container onClick={handleClick}>
      <Icon src={props.icon} />
      <CardTitle>{props.title}</CardTitle>
      <Subtext>{props.text}</Subtext>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)
