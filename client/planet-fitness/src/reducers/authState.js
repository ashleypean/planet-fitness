import * as types from '../actions/actionTypes'

const initialState = {
  isAuthenticated: true
}

const authStateReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_AUTH_STATUS: {
      return {
        ...state, 
        isAuthenticated: !state.isAuthenticated,
      }
    }
    default: 
      return state
  }
}

export default authStateReducer