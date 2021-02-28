import { watchUserLogin } from './login' 
import { watchUserRegister } from './register'
import { spawn } from 'redux-saga/effects'

export default function* rootSaga() {
  yield spawn(watchUserLogin)
  yield spawn(watchUserRegister)
}