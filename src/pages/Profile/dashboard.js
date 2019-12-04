import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="columns">
        <h4>Dashboard Component</h4>
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


export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

