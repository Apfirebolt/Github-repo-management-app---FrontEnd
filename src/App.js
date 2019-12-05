import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import ProfileComponent from './pages/Profile/routes';
import RepoComponent from './pages/Repo/routes';
import TestComponent from './pages/Test/routes';
import UserComponent from './pages/Users/routes';
import QueryComponent from './pages/Queries/routes';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">React GITHUB</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/profile">Profile</NavLink></li>
              <li><NavLink to="/test">Test</NavLink></li>
              <li><NavLink to="/repo">Repositories</NavLink></li>
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to="/query">Queries</NavLink></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/profile" component={ProfileComponent} />
          <Route path="/repo" component={RepoComponent} />
          <Route path="/test" component={TestComponent} />
          <Route path="/query" component={QueryComponent} />
          <Route path="/users" component={UserComponent} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
