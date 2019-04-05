import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import findUsernameCookie from "../../UtilityFunctions/findUsernameCookie"

console.log(findUsernameCookie());

function Account() {
    return (
        <div>
            <NavBar />
            <div className="row">
            <div className="row-header">Daily Nutrition Values</div>
                <div className="calcium">Calcium:</div>
                <div className="carbs">Carbohydrates:</div>
                <div className="fats">Fats:</div>
                <div className="iron">Iron:</div>
                <div className="fiber">Fiber:</div>
                <div className="potassium">Potassium:</div>
                <div className="sodium">Sodium:</div>
                <div className="calories">Calories:</div>
                <div className="protien">Protien:</div>
                <div className="vitA">Vitamin A:</div>
                <div className="vitE">Vitamin E:</div>
                <div className="vitB12">Vitamin B12:</div>
                <div className="vitC">Vitamin C:</div>
                <div className="vitD">Vitamin D:</div>
            </div>
            <div className="account">
                <div className="user">Hello "will pull in user name here"</div>
                <div className="suggestions">Suggestions!</div>
                <div className="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWUptfobG4DwbB-b2TSHdz11tcihM8XMmuK1duEp1crcHyiurTg"></img></div>
                <div className="stuff">stuff</div>
                <br></br>
                <div className="stuff">i would assume there will be more info in here</div>
               <br></br>
                <div className="stuff">that will fill more of the page</div>
                <br></br>
                <div className="stuff">to look more like this</div>
                <br></br>
                <div className="stuff">to look more like this</div>
                <br></br>
                <div className="stuff">to look more like this</div>
                <br></br>
                <div className="stuff">to look more like this</div>
                </div>
        </div>
    )
}

export default Account;