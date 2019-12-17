import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import axios from 'axios';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('Component Mounted...');
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    let passedData = {};
    passedData.username = username;
    passedData.password = password;

    // Make a request to obtain a token
    console.log('About to make api request call..', passedData);
    axios.post('http://localhost:8000/accounts/api/api-token-auth', passedData)
      .then((response) => {
        console.log('Token is : ', response.data.token);
        this.state.token = response.data.token;
      })
      .catch((error) => {
        console.log('Request failed : ', error);
      })
  }

  handleChange(event) {

    const { name, value } = event.target;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="columns">
        <h4>Login Component</h4>
        <form className="row" encType="multipart/form-data">
          <div className="input-field col s1">
            <label htmlFor="username">Enter Your Username</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Placeholder" name="username" id="username" type="text" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="input-field col s1">
            <label htmlFor="username">Enter Your Password</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Placeholder" name="password" id="username" type="password" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>
          <div className="container col s12 center-align">
            <input type="submit" onClick={this.handleSubmit} value="Login" className="btn success" />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,

  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: () => dispatch(actionCreators.add(10)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

