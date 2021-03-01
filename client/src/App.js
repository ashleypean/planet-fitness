import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Auth from './components/Auth/Auth'
import Login from './components/Login/Login'
import Schedule from './components/WorkoutSchedule/WorkoutSchedule'
import Goals from './components/Goals/Goals'
import NotFound from './components/404/NotFound'
import ViewProfile from './components/ViewProfile/ViewProfile'
import EditProfile from './components/EditProfile/EditProfile'
import ExerciseViewer from './components/ExcerciseViewer/ExerciseViewer'
import Settings from './components/Settings/Settings'
import WorkoutStats from './components/WorkoutStats/WorkoutStats'
import './index.css'
import * as actions from './redux/actions/actions'


const App = ({isAuthenticated, changeAuthStatus}) => {

  useEffect(() => {
    axios.get('/login')
      .then(response => {
        changeAuthStatus(true)
      })
      .catch( err => console.log(err))
  // eslint-disable-next-line
  }, [isAuthenticated])

  return(<Router>
    <div className="App">
      {/* If the user is authenticated allow access to the app. Otherwise, redirect them to the login page */}
      {AppRoutes}
    </div>
  </Router>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  changeAuthStatus: () => dispatch(actions.changeAuthStatus())
})

const AppRoutes = (
  <Switch>
    <Route exact path="/">
      props.isAuthenticated? <Redirect to="/profile" />: <Auth />
    </Route>
    <Route exact path="/login">
      props.isAuthenticated? <Redirect to="/profile" />: <Login />
    </Route>
    <Route path="/register">
      props.isAuthenticated? <Redirect to="/profile" />: <Login />
    </Route>
    <Route exact path="/profile" component={ViewProfile} />
    <Route exact path="/edit-profile" component={EditProfile} />
    <Route exact path="/workouts" component={Schedule} />
    <Route exact path="/workout/:id" component={ExerciseViewer} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/goals" component={Goals} />
    <Route exact path="/stats" component={WorkoutStats} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/404" component={NotFound} />
    <Route path="*">
      <Redirect to="/404" />
    </Route>
  </Switch>
)

export default connect(mapStateToProps, mapDispatchToProps)(App);











