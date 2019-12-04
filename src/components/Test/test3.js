import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Test3Component extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="columns">
        <h4>Test 3 component - {this.props.ctr}</h4>
        <button className="btn yellow green-text" onClick={() => this.props.onAddCounter()}>Material Button</button>
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
    onAddCounter: () => dispatch(actionCreators.addAsync(10)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Test3Component);

