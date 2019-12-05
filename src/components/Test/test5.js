import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Test5Component extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('Props inside fifth component : ', this.props.current);
  }

  render() {
    return (
      <div className="columns">
        <h4>Test 5 component</h4>
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
    onAddCounter: () => dispatch(actionCreators.add(10)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Test5Component);

