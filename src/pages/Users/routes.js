import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import SampleComponent from '../../components/Users/sample';


class UserRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_user: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { search_user } = this.state;
    this.setState({search_user : event.target.value})
  }

  render() {
    const { search_user } = this.state;
    return (
      <Router className="container">
        <h2>User Routes Component {search_user}</h2>

        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="search_user">Search for Github User</label>
          </div>

          <div className="input-field col s6">
            <input placeholder="Enter user name to search here!" name="search_user" id="search_user" type="text"
                   onChange={(event) => this.handleChange(event)} className="validate" />
          </div>

          <div className="col s2">
            <button className="btn">Search User</button>
          </div>
        </div>

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
