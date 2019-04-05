let findUsernameCookie = function(){
    return document.cookie.split("; ").filter(element =>{
      console.log(element.match("meallerReportUser"))
      if(element.match("meallerReportUser")){
        return true;
      }
      return false;
    })
    
  }

  export default findUsernameCookie;