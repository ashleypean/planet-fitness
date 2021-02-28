import { combineReducers } from 'redux'
import authStateReducer from './authState'
import workoutsReducer from './workouts'
import userReducer from './user'
import menuReducer from './menu'

const reducers = combineReducers({
  authState: authStateReducer, 
  workouts: workoutsReducer, 
  user: userReducer,
  menu: menuReducer,
})

export default reducers