import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import logo from "./logo.svg";
//import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import proxyList from "./proxyList.js";
import proxyArea from "./proxyArea.js";
import ProxyHome from "./ProxyHome.js";
import proxyInfo from "./proxyInfo.js";

class App extends Component {  
  render() {
    return (
      <Router>
        <div>
            <ul className="nav ml-2">
              <li className="nav-item">    
              <Link to="/">Proxy Gen</Link>
              </li>
            <li className="nav-item ml-5">
              <Link to="/proxyList">Proxy List</Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/proxyArea">Proxy Area</Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/info">Info</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={ProxyHome} />
          <Route path="/proxyList" component={proxyList} />
          <Route path="/proxyArea" component={proxyArea} />
          <Route path="/info" component={proxyInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
