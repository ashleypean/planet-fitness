import { combineReducers } from 'redux'
import authStateReducer from './authState'
import workoutsReducer from './workouts'
import userReducer from './user'

const reducers = combineReducers({
  authState: authStateReducer, 
  workouts: workoutsReducer, 
  user: userReducer,
})

export default reducers