import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import './main.scss';

class DetailRepoComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { search_results } = this.props;
    return (
      <div className="container detail_container">
        <h2>Detail Container Page {this.props.match.params.id}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    search_results: state.repo.query_search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: () => dispatch(actionCreators.add(10)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailRepoComponent);

