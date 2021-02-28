import * as types from '../actions/actionTypes'

const initialState = {
  name: 'Ashley Pean',
  email: 'pean.ashley@gmail.com',
  password: 'password',
  user_id: '1233',
}

const userReducer = (state = initialState, action) => {

  switch(action.type) {
    
    case types.ADD_USER: {
      const {name, email, password, user_id} = action.payload
      return { name, email, password, user_id }
    }

    case types.UPDATE_USER: {
      const {name, email, password, user_id} = action.payload
      //If a value has been updated and sent through the payload, update it
      //Otherwise keep the same value that was in the original state  
      return {
        name: name !== state.name? name: state.name, 
        email: email !== state.email? email: state.email,
        password: password !== state.password? password: state.password, 
        user_id: user_id !== state.user_id? user_id: state.user_id
      }
    }

    default: 
      return state
  }
}

export default userReducer