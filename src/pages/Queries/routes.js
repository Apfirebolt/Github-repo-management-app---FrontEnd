import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import SampleComponent from '../../components/Queries/sample';

class QueryRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_text: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { search_text } = this.state;
    this.setState({search_text: event.target.value})
  }

  render() {
    const { search_text } = this.state;
    return (
      <Router className="container">
        <h2>Search for a topic here on github! {search_text}</h2>

        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="search_topic">Search for topic</label>
          </div>

          <div className="input-field col s6">
            <input placeholder="Enter topic to search here!" name="search_topic" id="search_topic" type="text"
                   onChange={(event) => this.handleChange(event)} className="validate" />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="sort_by">Sort Search Results By</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="order_by">Order search results</label>
          </div>

          <div className="input-field col s6">

          </div>
        </div>

        <div className="col s2">
          <button className="btn">Search</button>
        </div>

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
