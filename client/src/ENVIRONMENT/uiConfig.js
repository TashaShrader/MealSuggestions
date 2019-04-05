import React from "react";
import app from 'firebase/app'

const uiConfig = {
  signInFlow : "popup",
  signInOptions : [
    app.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      console.log(result.user.displayName);
      document.cookie = "meallerReportUser=" + result.user.displayName;
      console.log(findUsernameCookie())
      return false;
  }
}
}

let findUsernameCookie = function(){
  return document.cookie.split("; ").filter(element =>{
    console.log(element.match("meallerReportUser"))
    if(element.match("meallerReportUser")){
      return true;
    }
    return false;
  })
  
}

export default uiConfig