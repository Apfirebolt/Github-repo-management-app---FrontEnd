import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Test1Component from '../../components/Test/test1';
import Test2Component from '../../components/Test/test2';
import Test3Component from '../../components/Test/test3';
import Test4Component from '../../components/Test/test4';
import Test5Component from '../../components/Test/test5';

class TestRoutes extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router className="container">
        <h2>Test Routes Component</h2>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/test/test1">Test 1</NavLink></li>
          <li><NavLink to="/test/test2">Test 2</NavLink></li>
          <li><NavLink to="/test/test3">Test 3</NavLink></li>
          <li><NavLink to="/test/test4">Test 4</NavLink></li>
          <li><NavLink to="/test/test5">Test 5</NavLink></li>
        </ul>

        <Switch>
          <Route path="/test/test1" component={Test1Component} />
          <Route path="/test/test2" component={Test2Component} />
          <Route path="/test/test3" component={Test3Component} />
          <Route path="/test/test4" component={Test4Component} />
          <Route path="/test/test5" component={Test5Component} />
        </Switch>
      </Router>
    )
  }
}

export default TestRoutes;
