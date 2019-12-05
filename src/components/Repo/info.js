import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class InfoComponent extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('Props passed are : ', this.props);
  }

  render() {
    const { repoData } = this.props;
    return (
      <div className="columns">
        <h4>Info Component - {this.props.ctr}</h4>
        {Object.keys(repoData).map((value, index) => {
          return (
            <p key={index}>{repoData[value]}</p>
          )
        })}
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


export default connect(mapStateToProps, mapDispatchToProps)(InfoComponent);

