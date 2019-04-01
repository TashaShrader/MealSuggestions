import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Account from "./Components/Account";
import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar />
      {/* <Route exact path="/" component={LogIn} /> */}
      {/* <Route exact path="/home" component={Home} /> */}
      <Route exact path="/account" component={Account} />
      </div>
      </Router> 
    );
  }
}

export default App;
