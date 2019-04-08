import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Account from "./Components/Account";
import LogIn from "./Components/SignIn";
import Home from "./Components/Home";
import ui from "./ENVIRONMENT/uiConfig";


class App extends Component {

  render() {
    return (
      <div>
      <Router>
      <div>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/account" component={Account} />
      </div>
      </Router> 
      </div>
    );
  }
}

export default App;
