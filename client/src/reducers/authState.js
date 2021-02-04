import * as types from '../actions/actionTypes'

const initialState = {
  isAuthenticated: false
}

const authStateReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_AUTH_STATUS: {
      return {
        isAuthenticated: action.payload
      }
    }
    default: 
      return state
  }
}

export default authStateReducer