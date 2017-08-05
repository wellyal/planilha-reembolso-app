import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/expenses'

import userExpensesService from 'services/expenses'

export function *getUserExpenses() {
  try {
    const expenses = yield call(userExpensesService.getUserExpenses)
    yield put({ type: actionTypes.SUCCESS, payload: expenses })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export const watchGetUserExpenses = takeEvery(actionTypes.REQUEST, getUserExpenses)