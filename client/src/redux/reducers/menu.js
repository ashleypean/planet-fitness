import * as types from '../actions/actionTypes'

const initialState = {
  visibleMenu: false,
  visibleSettings: false
}

const menuReducer = (state = initialState, action) => {

  switch(action.type) {
    
    case types.CHANGE_MENU_VISIBILITY: {
      return {...state, visibleMenu: !state.visibleMenu}
    }
    case types.CHANGE_SETTINGS_VISIBILITY: {
      return {...state, visibleSettings: !state.visibleSettings}
    }

    default: 
      return state
  }
}

export default menuReducer