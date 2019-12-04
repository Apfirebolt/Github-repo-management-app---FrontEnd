import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import LoginComponent from './login';
import RegisterComponent from './register';
import DashboardComponent from './dashboard';


class ProfileRoutes extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router className="container">
        <h2>Profile Routes Component</h2>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/profile/login">Login</NavLink></li>
          <li><NavLink to="/profile/register">Register</NavLink></li>
          <li><NavLink to="/profile/dashboard">Dashboard</NavLink></li>
        </ul>

        <Switch>
          <Route path="/profile/login" component={LoginComponent} />
          <Route path="/profile/register" component={RegisterComponent} />
          <Route path="/profile/dashboard" component={DashboardComponent} />
        </Switch>
      </Router>
    )
  }
}

export default ProfileRoutes;
