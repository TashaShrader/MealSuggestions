import React from "react";
import "./style.css";
import firebase from 'firebase';
import 'firebase/auth';



function NavBar() {
    return (
        <div className="navbar">
            <div className="title">The Mealler Report</div>
            <a href="/home" className="home">home</a>
            <a href="/account" className="accountbutton">account</a>
            <a href="/" className="logout" onClick={() => firebase.auth().signOut()}>sign-out</a>
        </div>
    )
}

export default NavBar;