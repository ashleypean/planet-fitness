import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Auth from './components/Auth/Auth'
import Login from './components/Login/Login'
import Signup from './components/Signup'
import Schedule from './components/WorkoutSchedule/WorkoutSchedule'
import NotFound from './components/NotFound'
import ViewProfile from './components/ViewProfile/ViewProfile'
import EditProfile from './components/EditProfile/EditProfile'
import ExerciseViewer from './components/ExcerciseViewer/ExerciseViewer'
import Settings from './components/Settings/Settings'
import './App.css'


const App = props => {
  return (
    <Router>
      <div className="App">
        {/* If the user is authenticated allow access to the app. Otherwise, redirect them to the login page */}
        {props.isAuthenticated? MainAppRoutes: LoginRoutes}
      </div>
    </Router>
  );
}

//Authorized routes for unauthenticated users
const LoginRoutes = (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route component={NotFound} />
  </Switch>
)

//Authorized routes for authenticated users
const MainAppRoutes = (
  <Switch>
    <Route exact path="/" component={ViewProfile} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={ViewProfile} />
    <Route exact path="/edit-profile" component={EditProfile} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/workouts" component={Schedule} />
    <Route exact path="/workout/:id" component={ExerciseViewer} />
    <Route exact path="/settings" component={Settings} />
    <Route component={NotFound} />
  </Switch>
)

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated
})

export default connect(mapStateToProps, null)(App);

