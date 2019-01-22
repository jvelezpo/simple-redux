import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getGithubInfo } from "../actions";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  render() {
    return (
      <div>
        <div>
          User
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <button onClick={() => this.props.getGithubInfo(this.state.username)}>
            Get User Info
          </button>
        </div>
        <hr />
        {this.props.github.id &&
          <div>
            <div>id: {this.props.github.id}</div>
            <div>url: {this.props.github.url}</div>
            <div>name: {this.props.github.name}</div>
            <div>location: {this.props.github.location}</div>
            <div>avatar: <img src={this.props.github.avatar_url} alt="avatar"/></div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps({ github }) {
  return { github };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getGithubInfo
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
