import { Route, withRouter, Switch, Redirect } from 'react-router-dom'

import LoginPage from './pages/Pagelogin'
import IndexPage from './pages/index'

export default withRouter(() => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="login" />
    </Route>
    <Route path="/login" exact component={LoginPage} />

    <Route path="/admin" exact>
      <Redirect to="/admin/dashboard" />
    </Route>
    <Route path="/admin" component={IndexPage} />
    <Redirect to="/login" />
  </Switch>
))
