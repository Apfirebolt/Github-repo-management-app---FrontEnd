import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import './main.scss';

class QuerySummaryComponent extends Component {
  constructor(props) {
    super(props);

    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl(id) {
    this.props.router.push('/detail/' + id);
  }

  render() {
    const { search_results } = this.props;
    return (
      <div className="container summary_container">
        {search_results.items ?
          search_results.items.map((value, index) => {
            return (
              <div key={index} className="card">
                <div className="card-title">
                  <h4>{value.name}</h4>
                  <h4>{value.owner.login}</h4>
                </div>
                <div className="card-content">
                  <div>
                    <img src={value.owner.avatar_url} alt="Image not found" height="300" width="300"/>
                    <p className="white-text">{value.description}</p>
                  </div>
                </div>
                <div className="card-panel">
                  <span>SCORE {value.score}</span>, <span>STARS {value.stargazers_count}</span> stars on GITHUB
                  <button className="btn">Add This Repo</button>
                  <button className="btn" onClick={() => this.changeUrl(index)}>View Details</button>
                </div>
              </div>
            )
          })
          :
          <h4>No items exist</h4>
        }
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


export default connect(mapStateToProps, mapDispatchToProps)(QuerySummaryComponent);

