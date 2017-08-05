import { all, fork } from 'redux-saga/effects'

import { watchAuthenticate } from './auth'
import { watchGetUserExpenses } from './expenses'

export default function* rootSaga() {
  yield all([
    fork(watchAuthenticate),
    watchGetUserExpenses
  ])
}