
let sumNutrients = function (fullNutrientArray) {
    let nutrientNames = [];
    //here we create an array with just one instance of each nutrient
    //this is filtered prior to a given day in the controller
    let filteredNutrients = fullNutrientArray.filter((element,i) =>{
        //if element.nutrient exists in the nutrientNames array
        if(nutrientNames.find(el =>{
           return el === element.nutrient 
        })){
            //don't add it to the new array
        return false
    }
    //if it does not exist in the nutrientNames array
    else{
        //add it to the nutrientNames array and add the elemtn to the new array
        nutrientNames.push(element.nutrient)
        return true
        }
    })

    //Now we need to change the quantity value in the new array to
    //the summed value of the nutrients for the whole day with that name
    //...
    filteredNutrients.forEach(filteredNutrientArrayElement =>{
        //first get the array of the nutrients matching the name
        let allNutrientExamples = fullNutrientArray.filter(fullNutrientArrayElement =>{
            if(fullNutrientArrayElement.nutrient === filteredNutrientArrayElement.nutrient){return true}
            else{return false};
        })
        //then break it down to just quantities
        let nutrientExamplesQuantities = allNutrientExamples.map(nutrientExamplesElement => {
            return nutrientExamplesElement.quantity;
        })
        //then sum the array
        filteredNutrientArrayElement.quantity = nutrientExamplesQuantities.reduce((total, num) =>{
            return total+num
        })
    })
return filteredNutrients;

}


module.exports = sumNutrients;