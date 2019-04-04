import React from "react";
import firebase from './FirebaseConfig'

const uiConfig = {
    signInFlow : "popup",
    signInOptions : [
      firebase.googleProviderID,
    ]
}

export default uiConfig