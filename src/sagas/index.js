import { all } from 'redux-saga/effects'

import { watchAuthenticate } from './auth'

export default function* rootSaga() {
  yield all([
    watchAuthenticate()
  ])
}