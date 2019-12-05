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
      isLoading: false,
      user: 'apfirebolt'
    }
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.props.getUserDetails(this.state.user);
  }

  render() {
    const { isLoading, data } = this.state;
    const { current } = this.props;
    return (
      <div className="columns">
        <h3 className="teal-text">User Repo Information</h3>
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
    current: state.repo.current_repo
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: (payload) => dispatch(actionCreators.search_user_util(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoRoutes);
