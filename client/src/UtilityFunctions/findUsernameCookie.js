let findUsernameCookie = function(){
    return document.cookie.split("; ").filter(element =>{
      if(element.match("meallerReportUser")){
        return true;
      }
      return false;
    })
    
  }

  export default findUsernameCookie;