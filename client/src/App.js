import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Account from "./Components/Account";
import LogIn from "./Components/SignIn";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route exact path="/login" component={LogIn} />
      {/* <Route exact path="/home" component={Home} /> */}
      <Route exact path="/account" component={Account} />
      </div>
      </Router> 
    );
  }
}

export default App;
