import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { sendResult } from "../actions";

import "./calculator.scss";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sumN: 0,
      sumM: 0,
      mulN: 0,
      mulM: 0
    };
    this.add = this.add.bind(this);
    this.mul = this.mul.bind(this);
  }

  add() {
    this.props.sendResult(
      `Sum: ${this.state.sumN} + ${this.state.sumM} = ${this.state.sumN +
        this.state.sumM}`
    );
    this.setState({ sumN: 0, sumM: 0 });
  }

  mul() {
    this.props.sendResult(
      `Mul: ${this.state.mulN} * ${this.state.mulM} = ${this.state.mulN *
        this.state.mulM}`
    );
    this.setState({ mulN: 0, mulM: 0 });
  }

  render() {
    return (
      <div className="app">
        <div className="math">
          <div>
            <input
              type="number"
              value={this.state.sumN}
              onChange={e => this.setState({ sumN: +e.target.value })}
            />
            +
            <input
              type="number"
              value={this.state.sumM}
              onChange={e => this.setState({ sumM: +e.target.value })}
            />
            <button onClick={this.add}>Add</button>
          </div>
          <div>
            <input
              type="number"
              value={this.state.mulN}
              onChange={e => this.setState({ mulN: +e.target.value })}
            />
            *
            <input
              type="number"
              value={this.state.mulM}
              onChange={e => this.setState({ mulM: +e.target.value })}
            />
            <button onClick={this.mul}>Multiply</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sendResult
    },
    dispatch
  );
}

export default connect(
  undefined,
  mapDispatchToProps
)(Calculator);
