import * as types from '../actions/actionTypes'

const initialState = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_USER: {
      return {
        name: action.payload.name, 
        email: action.payload.email,
      }
    }

    case types.UPDATE_USER: {
      //If a value has been updated and sent through the payload, update it
      //Otherwise keep the same value that was in the original state  
      return {
        name: action.payload.name !== state.name? action.payload.name: state.name, 
        email: action.payload.email !== state.email? action.payload.email: state.email,
      }
    }

    default: 
      return state
  }
}

export default userReducer