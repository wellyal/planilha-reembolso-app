import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SignIn from './components/pages/SignIn';

ReactDOM.render(
  <SignIn />,
  document.getElementById('root')
);

registerServiceWorker();
