import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import './main.scss';

class InfoComponent extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { login, location, id, html_url, followers, blog, following, followers_url, following_url, name, repos_url, company, bio } = this.props.repoData;
    return (
      <div className="container">
        <div className="card">
          <h5>{login} - ({name}) {location ? location : null}</h5>
          <div className="card-content">
            <p>Profile Url : <a href={html_url}>{html_url}</a></p>
            <p>Biography : {bio}</p>
            <p>Repos Url : <a href={repos_url}>{repos_url}</a></p>
            <p>Company : {company}</p>
            <p>{name} has {followers} followers.</p>
            <p>{name} is following {following} people</p>
            {blog ?
              <p>{name} has a blog - <a href={blog}>{blog}</a></p>
            : null}
          </div>
        </div>
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

