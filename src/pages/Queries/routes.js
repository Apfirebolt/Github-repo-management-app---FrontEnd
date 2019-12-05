import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

import SampleComponent from '../../components/Queries/sample';
import SummaryComponent from '../../components/Queries/summary';
import DetailComponent from '../../components/Queries/detail';

class QueryRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_text: '',
      order_by: 'asc',
      sort_by: 'stars',
      isLoading: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.orderChange = this.orderChange.bind(this);
    this.sortChange = this.sortChange.bind(this);
    this.loadAPIData = this.loadAPIData.bind(this);
  }

  componentDidMount() {
    console.log('Props : ', this.props.search_results);
  }

  loadAPIData() {
    const { search_text, order_by, sort_by } = this.state;
    const payload = {
      search_text,
      order_by,
      sort_by,
    }
    this.setState({isLoading: true});
    this.props.loadResults(payload);
  }

  sortChange(event) {
    const { sort_by } = this.state;
    this.setState({sort_by: event.target.value});
  }

  orderChange(event) {
    const { order_by } = this.state;
    this.setState({order_by: event.target.value});
  }

  handleChange(event) {
    const { search_text } = this.state;
    this.setState({search_text: event.target.value})
  }

  render() {
    const { search_text, isLoading } = this.state;
    const { search_results } = this.props;
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

          <div className="input-field col s6">
            <select placeholder="Enter topic to search here!" name="sort_by" id="sort_by"
                   onChange={(event) => this.sortChange(event)} className="browser-default">
              <option value="stars" defaultValue>Stars</option>
              <option value="forks">Forks</option>
              <option value="help-wanted-issues">Issues</option>
              <option value="updated">Updated</option>
            </select>

          </div>
        </div>

        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="order_by">Order search results</label>
          </div>

          <div className="input-field col s6">
            <select placeholder="Enter topic to search here!" name="order_by" id="order_by"
                    onChange={(event) => this.orderChange(event)} className="browser-default">
              <option value="asc" defaultValue>Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        <div className="col s4">
          <button className="btn" onClick={() => this.loadAPIData()}>Search</button>
        </div>

        {Object.keys(search_results).length == 0 && isLoading ?
          <Loader
            type="Puff"
            color="coral"
            height={200}
            width={200}
            style={{ margin: '1rem' }}
          />
          :
          <SummaryComponent />
        }

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

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    search_results: state.repo.query_search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadResults: (payload) => dispatch(actionCreators.search_result_store(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryRoutes);
