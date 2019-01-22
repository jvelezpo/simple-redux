import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calculator from "./container/calculator";
import CalculatorResults from "./container/calculator-results";
import Index from "./container/index";
import Other from "./container/other";
import Github from "./container/github";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator/">calculator</Link>
              </li>
              <li>
                <Link to="/calculator-results/">calculator results</Link>
              </li>
              <li>
                <Link to="/other/">other</Link>
              </li>
              <li>
                <Link to="/github/">github</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/calculator/" component={Calculator} />
          <Route path="/calculator-results/" component={CalculatorResults} />
          <Route path="/other/" component={Other} />
          <Route path="/github/" component={Github} />
        </div>
      </Router>
    );
  }
}

export default App;
