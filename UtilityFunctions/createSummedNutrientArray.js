const controller = require("../Controller/usersController");

let email = "mitburr@gmail.com"
let sumAllNutrients = function (email) {

    //finds and returns the array of nutrients for a given use
    let fillNutrientsArray = function(){
        //searches using email
         return controller.findByDate(email).then(nutrients => {
             //returns nutrients
        return nutrients;
    })}
    
    const fullNutrientArray = fillNutrientsArray();

    let separateNutrients = function (fullNutrientArray) {
        let nutrientNames = [];
        let filteredNutrients = fullNutrientArray.filter(element =>{
            if(nutrientNames.find(el =>{
               return el === element.name 
            })){
            console.log(nutrientNames);
            return false
        }
        else{
            nutrientNames.push(element.name)
            console.log(nutrientNames);
            return true
            }
        })
        return filteredNutrients;
    }
    console.log(separateNutrients(fullNutrientArray));
}
sumAllNutrients(email);