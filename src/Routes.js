import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Topbar from 'components/organisms/Topbar'
import SignIn from 'components/pages/SignIn'
import Stylesheet from 'components/pages/Stylesheet'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/app" component={Topbar} />
      <Route path="/app/stylesheet" component={Stylesheet} />
    </div>
  </Router>
)

export default Routes
