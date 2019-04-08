let findUserEmail = function(){
    return document.cookie.split("; ").filter(element =>{
      if(element.match("meallerReportEmail")){
        return true;
      }
      return false;
    })
    
  }

  export default findUserEmail;