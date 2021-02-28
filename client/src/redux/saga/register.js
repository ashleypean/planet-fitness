import { takeEvery } from 'redux-saga/effects'
import * as action from '../actions/actionTypes'
import API from './api'

function* registerUser({payload}) {
  console.log('start register process')
  const result = yield API.register(payload)
  console.log(result)
}

export function* watchUserRegister() {
  try{
    yield takeEvery(action.REGISTER_USER, registerUser)
  }catch(err) {
    console.log(err)
  }
}