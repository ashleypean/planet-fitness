import React from 'react'
import Menu from '../Menu/Menu'
import { connect } from 'react-redux'

const NotFound = (props) => {
  return (
    <div>
      <Menu visible={props.menuVisibility} />

      <h1>Uh Oh! That route does not exist!</h1>
      <p>Please try navigating back to the <a href="/">home page</a>. </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)

