import app from 'firebase/app';

const uiConfig = {
  signInFlow : "popup",
  signInOptions : [
    app.auth.GoogleAuthProvider.PROVIDER_ID
  ],  
  signInSuccessUrl: '/home',

  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      console.log(result.user);
      document.cookie = "meallerReportUser=" + result.user.displayName;
      document.cookie = "meallerReportEmail=" + result.user.email;
      return true;
  }

}
}

export default uiConfig;