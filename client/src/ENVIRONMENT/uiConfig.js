import app from 'firebase/app';

const uiConfig = {
  signInFlow : "popup",
  signInOptions : [
    app.auth.GoogleAuthProvider.PROVIDER_ID
  ],  
  signInSuccessUrl: '/account',

  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      console.log(result.user);
      return true;
  }

}
}

export default uiConfig;