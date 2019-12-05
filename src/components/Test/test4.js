import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import {search_user_util} from "../../store/actions/repo";

class Test4Component extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('Calling API method..', this.props.current);
  }

  render() {
    return (
      <div className="columns">
        <h4>Test 4 component - {this.props.ctr}</h4>
        <button className="btn" onClick={() => this.props.incCounter()}>
          Counter
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    current: state.repo.query_search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => dispatch(actionCreators.search_user_util()),
    incCounter: () => dispatch(actionCreators.add(1))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Test4Component);

