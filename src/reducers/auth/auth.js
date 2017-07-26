import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'planilha_reembolso/auth/REQUEST',
  SUCCESS: 'planilha_reembolso/auth/SUCCESS',
  FAILURE: 'planilha_reembolso/auth/FAILURE'
}

const signinRequest = createAction(actionTypes.REQUEST)

const defaultState = {
  isFetching: false,
  data: null,
  error: null
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
      data: payload
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

export const signin = payload => signinRequest()

export default reducer