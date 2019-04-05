import React from "react";
import app from 'firebase/app';
const uiConfig = {
  signInFlow : "popup",
  signInOptions : [
    app.auth.GoogleAuthProvider.PROVIDER_ID
  ],  
  signInSuccessUrl: '/account',

  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      console.log(result.user.displayName);
      return true;
  }

}
}

export default uiConfig;