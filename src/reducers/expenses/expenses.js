import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'planilha_reembolso/expenses/REQUEST',
  SUCCESS: 'planilha_reembolso/expenses/SUCCESS',
  FAILURE: 'planilha_reembolso/expenses/FAILURE'
}

const getUserExpensesRequest = createAction(actionTypes.REQUEST)

const defaultState = {
  isFetching: false,
  success: null,
  error: null,
  data: null
}

const reducer = handleActions({
  [actionTypes.REQUEST](state) {
    return {
      ...state,
      isFetching: true
    }
  },
  [actionTypes.SUCCESS](state, {payload}) {
    return {
      ...state,
      isFetching: false,
      success: true,
      data: payload.data.expensesMock.data
    }
  },
  [actionTypes.FAILURE](state, {payload}) {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  }
}, defaultState)

export const getUserExpenses = () => getUserExpensesRequest()

export default reducer