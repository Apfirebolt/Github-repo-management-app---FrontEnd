import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import * as styles from './main.scss';
import axios from 'axios';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password1: '',
      password2: '',
      about: '',
      errors: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password1: '',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({[name]: value})
  };

  validateForm = (errors) => {
    console.log('Errors are : ', errors);
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.username == '')
    {
      this.state.errors.username = 'Username is a required field';
    }
    if(this.state.first_name == '')
    {
      this.state.errors.first_name = 'First Name is a required field';
    }
    if(this.state.last_name == '')
    {
      this.state.errors.last_name = 'Last Name is a required field';
    }
    if(this.state.email == '')
    {
      console.log('Email not displayed..');
      this.state.errors.email = 'Email is a required field';
    }
    if(this.state.password1 == '')
    {
      this.state.errors.password1 = 'Password cannot be left blank';
    }
    if(this.state.password2 != this.state.password1)
    {
      this.state.errors.password1 = 'Passwords do not match!';
    }
    if(this.validateForm(this.state.errors)) {
      console.info('Valid Form');
    }else{
      console.error('Invalid Form', this.state.errors);
    }

    // Posting data after validation
    let formData = {};
    formData.username = this.state.username;
    formData.first_name = this.state.first_name;
    formData.last_name = this.state.last_name;
    formData.email = this.state.email;
    formData.password = this.state.password1;
    formData.about_me = this.state.about;

    axios.post('http://localhost:8000/accounts/api/create', formData)
      .then((response) => {
        console.log('Response is : ', response);
      })
      .catch((err) => {
        console.log('Operation failed, error ', formData);
      })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h4>Register Component</h4>
        <form className="row" encType="multipart/form-data">
          <div className="input-field col s1">
            <label htmlFor="first_name">First Name</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Placeholder" name="first_name" id="first_name" type="text" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="input-field col s1">
            <label htmlFor="last_name">Last Name</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Placeholder" name="last_name" id="last_name" type="text" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="input-field col s1">
            <label htmlFor="username">Choose a Username</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Enter your username" name="username" id="username" type="text" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="input-field col s1">
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Enter your email" name="email" id="email" type="text" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="input-field col s1">
            <label htmlFor="password1">Your Password</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Enter your password" name="password1" id="password1" type="password" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="input-field col s1">
            <label htmlFor="password2">Confirm Password</label>
          </div>

          <div className="input-field col s5">
            <input placeholder="Please re-enter your password" name="password2" id="password2" type="password" onChange={(event) => this.handleChange(event)}
                   className="validate" />
          </div>

          <div className="col s6 input-field">
            <textarea placeholder="Please say something about yourself" name="about" id="about" className="validate control">
            </textarea>
          </div>

          <div className="container col s12 center-align">
            <input type="submit" onClick={this.handleSubmit} value="Register Now" className="btn success" />
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


export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

