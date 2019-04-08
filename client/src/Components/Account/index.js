import React, {Component} from "react";
import "./style.css";
import NavBar from "../NavBar";
import findUsernameCookie from "../../UtilityFunctions/findUsernameCookie"
import API from '../../UtilityFunctions/API'

console.log(findUsernameCookie());


class Account extends Component {
    
componentDidMount = () =>{
    console.log(API.createAccount("test"))
}
    render(){
    return (
        <div>
            <NavBar />
            <div className="row">
            <div className="row-header">Daily Nutrition Values</div>
                <div className="calcium"><b>Calcium:</b></div>
                <div className="carbs"><b>Carbohydrates:</b></div>
                <div className="fats"><b>Fats:</b></div>
                <div className="iron"><b>Iron:</b></div>
                <div className="fiber"><b>Fiber:</b></div>
                <div className="potassium"><b>Potassium:</b></div>
                <div className="sodium"><b>Sodium:</b></div>
                <div className="calories"><b>Calories:</b></div>
                <div className="protien"><b>Protien:</b></div>
                <div className="vitA"><b>Vitamin A:</b></div>
                <div className="vitE"><b>Vitamin E:</b></div>
                <div className="vitB12"><b>Vitamin B12:</b></div>
                <div className="vitC"><b>Vitamin C:</b></div>
                <div className="vitD"><b>Vitamin D:</b></div>
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
}

export default Account;