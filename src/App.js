import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calculator from "./container/calculator";
import Index from "./container/index";
import Other from "./container/other";

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
                <Link to="/other/">other</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/calculator/" component={Calculator} />
          <Route path="/other/" component={Other} />
        </div>
      </Router>
    );
  }
}

export default App;
