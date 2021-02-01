import * as types from './actionTypes'

export const changeAuthStatus = () => ({
  type: types.CHANGE_AUTH_STATUS,
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