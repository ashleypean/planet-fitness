import * as types from '../actions/actionTypes'

const initialState = {
  isAuthenticated: false
}

const authStateReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_AUTH_STATUS: {
      console.log('changing auth status')
      return {
        isAuthenticated: action.payload ?? !state.isAuthenticated
      }
    }
    default: 
      return state
  }
}

export default authStateReducer