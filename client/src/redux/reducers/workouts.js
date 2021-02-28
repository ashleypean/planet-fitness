import * as types from '../actions/actionTypes'

const initialState = [{
  name: 'Treadmill', 
  user_id: '',
  id: 1, 
  type: 'cardio', 
  time: 100,
  weight: 100,
  barcode: '', 
  sets: 1, 
  reps: 1, 
  date: '',
  avgSpeed: ''
}]

const workoutsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_WORKOUT: {
      //Copy current state
      const newState = state

      //Push the new workout onto the NEW state array 
      newState.push(action.payload)

      return newState
    }

    case types.EDIT_WORKOUT: {
      //Isolate the individual workout that the user wants to update
      //Set all of the properties of that workout to whatever was sent in the payload
      //Return the new state object 
      const newState = state.map((workout, index) => {
        if(workout.id === action.payload.id) {
          for(const property in workout){
            workout[property] = action.payload[property]
          }
        }
        return workout
      }) 

      return newState
    }

    case types.DELETE_WORKOUT: {
      //Filter out the workout that matches the action payload's workout id
      const newState = state.filter(workout => workout.id !== action.payload.id) 
      
      return newState
    }

    default: 
      return state
  }
}

export default workoutsReducer