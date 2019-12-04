import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="columns">
        <h2>Profile Component - { this.props.ctr }</h2>
        <div className="is-centered">
          <button className="button btn" onClick={this.props.onAddCounter}>Increment Value</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

