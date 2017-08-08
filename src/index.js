import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Routes store={store} />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
