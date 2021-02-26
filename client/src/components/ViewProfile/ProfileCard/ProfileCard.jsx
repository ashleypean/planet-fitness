import React from 'react'
import { connect } from 'react-redux'
import { CardTitle, Container, Icon, Subtext } from './ProfileCard.styles'


export const ProfileCard = (props) => {
  return (
    <Container>
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
