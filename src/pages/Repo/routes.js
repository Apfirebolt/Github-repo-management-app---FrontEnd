import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

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

  componentWillReceiveProps() {

  }

  componentWillUpdate() {

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
    axios.get('https://api.github.com/users/buckyroberts')
      .then((response) => {
        this.setState({
          data: response.data,
          isLoading: false
        })
        this.forceUpdate();
      })
      .catch((err) => {
        console.log('Some error occurred! ', err);
      })
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="columns">
        <h2>Repository Component</h2>
        {isLoading ?
          <Loader
            type="Puff"
            color="coral"
            height={200}
            width={200}
            timeout={3000} //3 secs

          />
          :
          <InfoComponent repoData = {data}/>
        }

      </div>
    )
  }
}

export default RepoRoutes;
