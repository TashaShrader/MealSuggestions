import React from "react";
import "./style.css";
// import SignInGoogleBase from "../SignIn/firebaseAuth";


function NavBar() {
    return (
    
        <div className="navbar">
            <div className="title">Meal Suggestion App</div>
            <a href="/home" className="home">home</a>
            <a href="/account" className="accountbutton">account</a>
            <a href="/login" className="logout">logout</a>
            {/* <SignInGoogleBase /> */}
            
        </div>
    )
}

export default NavBar;