import * as types from './actionTypes'

export const changeAuthStatus = (bool) => ({
  type: types.CHANGE_AUTH_STATUS,
  payload: bool,
})

export const addWorkout = (workout) => ({
  type: types.ADD_WORKOUT, 
  payload: workout,
})

export const editWorkout = (workout) => ({
  type: types.EDIT_WORKOUT, 
  payload: workout,
})

export const deleteWorkout = (workout) => ({
  type: types.DELETE_WORKOUT, 
  payload: workout,
})

export const addUser = (user) => ({
  type: types.ADD_USER, 
  payload: user,
})

export const updateUser = (user) => ({
  type: types.UPDATE_USER, 
  payload: user,
})

export const changeMenuVisibility = () => ({
  type: types.CHANGE_MENU_VISIBILITY,
})

export const changeSettingsVisibility = () =>({
  type: types.CHANGE_SETTINGS_VISIBILITY
})
//Sagas
export const requestLogin = (user) => ({
  type: types.REQUEST_LOGIN,
  payload: user,
})

export const receiveLoginStatus = (data) => ({
  type: types.RECEIVE_LOGIN_STATUS, 
  data,
})

export const registerNewUser = (user) => ({
  type: types.REGISTER_USER, 
  payload: user,
})

export const redirectLoggedInUser = () => ({
  type: types.REDIRECT_USER
})
