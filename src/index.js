import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import SignIn from './components/pages/SignIn'
import Routes from './Routes'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

registerServiceWorker();
