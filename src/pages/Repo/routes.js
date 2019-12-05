import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import * as actionCreators from '../../store/actions/index';

import InfoComponent from '../../components/Repo/info'

class RepoRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false
    }
    this.loadData = this.loadData.bind(this);
    this.displayData = this.displayData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    const { isLoading, data } = this.state;
  }

  displayData() {
    const { data, isLoading } = this.state;
    Object.keys(data).map((value) => {
      return (
        <p key={data[value].id}>{data[value]} Something</p>
      )
    })
  }

  loadData() {
    this.setState({isLoading: true});
    this.props.getUserDetails();
    this.setState({isLoading: false});
  }

  render() {
    const { isLoading, data } = this.state;
    const { current } = this.props;
    return (
      <div className="columns">
        <h2>Repository Component</h2>
        {Object.keys(current).length == 0 ?
          <Loader
            type="Puff"
            color="coral"
            height={200}
            width={200}
          />
          :
          <InfoComponent repoData = {this.props.current}/>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    current: state.repo.current_repo

  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => dispatch(actionCreators.search_user_util()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoRoutes);
