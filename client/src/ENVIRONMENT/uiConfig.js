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
      return false;
  }
}
}

export default uiConfig