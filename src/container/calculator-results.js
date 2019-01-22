import React, { Component } from "react";
import { connect } from "react-redux";

class CalculatorResults extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Results</h3>
        <ul>
          {this.props.math.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ math }) {
  return { math };
}

export default connect(mapStateToProps)(CalculatorResults);
