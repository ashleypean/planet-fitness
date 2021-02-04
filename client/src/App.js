import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddWorkout from './components/AddWorkout'
import ViewWorkouts from './components/ViewWorkouts'
import NotFound from './components/NotFound'
import EditProfile from './components/EditProfile'
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
    <Route exact path="/" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route component={NotFound} />
  </Switch>
)

//Authorized routes for authenticated users
const MainAppRoutes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/edit-profile" component={EditProfile} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/view-workouts" component={ViewWorkouts} />
    <Route exact path="/add-workout" component={AddWorkout} />
    <Route component={NotFound} />
  </Switch>
)

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated
})

export default connect(mapStateToProps, null)(App);

