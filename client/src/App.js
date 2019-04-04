import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Account from "./Components/Account";
import LogIn from "./Components/SignIn";

import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import config from './ENVIRONMENT/FirebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Home from "./Components/Home";

app.initializeApp(firebaseConfig);



class App extends Component {
  state = {signedIn : false}
  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({signedIn : ! ! user})
    })
  }
  render() {
    return (
      <div>
        {this.state.signedIn  ? 
        (<a onClick={() => firebase.auth().signOut()}>Sign-out</a>) : 
        (<StyledFirebaseAuth  
          uiConfig = {uiConfig}
          firebaseAuth = {firebase.auth()}
          />)}
      <Router>
      <div>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/account" component={Account} />
      </div>
      </Router> 
      </div>
    );
  }
}

export default App;
