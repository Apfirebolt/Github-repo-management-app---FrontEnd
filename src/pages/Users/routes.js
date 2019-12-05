import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import SampleComponent from '../../components/Users/sample';


class UserRoutes extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router className="container">
        <h2>User Routes Component</h2>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/users/sample">Link to sample Component</NavLink></li>
        </ul>

        <Switch>
          <Route path="/users/sample" component={SampleComponent} />
        </Switch>
      </Router>
    )
  }
}

export default UserRoutes;
