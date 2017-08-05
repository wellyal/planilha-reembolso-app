import { combineReducers } from 'redux'

import auth from './auth'
import expenses from './expenses'

const rootReducer = combineReducers({
  auth,
  expenses
})

export default rootReducer