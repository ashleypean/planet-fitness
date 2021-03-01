import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import { connect } from 'react-redux'
import { Container, Title, Subtitle, BackHome } from './NotFound.styles'

const NotFound = (props) => {
  return (
    <Container>
      <Header />
      <Menu />

      <Title>Uh Oh! That route does not exist!</Title>
      <Subtitle>Please try navigating back to your <BackHome to="/">home page</BackHome>. </Subtitle>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)

