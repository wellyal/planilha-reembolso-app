import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SignIn from 'components/pages/SignIn'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={SignIn} />
    </div>
  </Router>
)

export default Routes
