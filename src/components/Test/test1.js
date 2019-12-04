import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import * as appConstants from '../constants';

class Test1Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5
    }

    this.changeName = this.changeName.bind(this);
    this.changeCounter = this.changeCounter.bind(this);
  }

  componentDidMount() {
    console.log('App constant is : ', appConstants.default);
  }

  changeName() {
    console.log('Change name method called..');
  }

  changeCounter() {
    console.log('Change counter method called..');
  }

  render() {
    const { number } = this.state;
    return (
      <div className="columns">
        <h4>Test 1 component - {this.props.current_repo}</h4>
        <h4>Counter Variable - {this.props.ctr}</h4>
        <p>{this.state.number}</p>
        <div className="container">
          <button className="white red-text btn" onClick={this.changeName}>Change Name</button>
          <button className="black red-text btn" onClick={() => this.props.onAddCounter(number)}>Change Counter</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    current_repo: state.repo.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: function(value) {
      dispatch(actionCreators.add(value));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Test1Component);

