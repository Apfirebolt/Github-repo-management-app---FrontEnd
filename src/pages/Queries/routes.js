import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import SampleComponent from '../../components/Queries/sample';

class QueryRoutes extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router className="container">
        <h2>Queries Component</h2>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/query/sample">Query sample</NavLink></li>
        </ul>

        <Switch>
          <Route path="/query/sample" component={SampleComponent} />
        </Switch>
      </Router>
    )
  }
}

export default QueryRoutes;
