import React from "react";
import "./style.css";

function NavBar() {
    return (
        <div className="navbar">
            <div className="title">Meal Suggestion App</div>
            <a href="/home" className="home">home</a>
            <a href="/account" className="accountbutton">account</a>
            <a href="/login" className="login">login</a>
        </div>
    )
}

export default NavBar;