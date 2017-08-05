import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'planilha_reembolso/auth/REQUEST',
  SUCCESS: 'planilha_reembolso/auth/SUCCESS',
  FAILURE: 'planilha_reembolso/auth/FAILURE'
}

const signinRequest = createAction(actionTypes.REQUEST)

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
      data: payload.data.authMock.data
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