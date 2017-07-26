import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/auth'

import authenticateService from 'services/auth'

function* authenticate(payload) {
  try {
    const status = yield call(authenticateService.auth, payload)
    yield put({ type: actionTypes.SUCCESS, payload: status })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export function* watchAuthenticate() {
  yield takeEvery(actionTypes.REQUEST, authenticate)
}