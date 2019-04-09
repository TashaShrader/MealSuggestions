//dependency
var express = require('express');
var axios = require("axios");
var Controller = require("../../Controller/usersController")
var mongoose = require("mongoose");
var moment = require("moment")
var sumNutrients = require("../../UtilityFunctions/createSummedNutrientArray")

//setup router access
var app = express.Router();

// Database configuration
mongoose.connect("mongodb://localhost/MealSearch", { useNewUrlParser: true });

app.post("/api/meal/login", (req, res) =>{
    newDoc = Controller.createAccount(req.body)
    res.json(newDoc);
})

app.put("/api/meal/nutrient", (req, res) =>{
    console.log(req.body)
    let emailArr = req.body.email[0].split("=");
    email = emailArr[1]
    let nutrientUpdateObj = {
        email,
        nutrient: {
            nutrient: req.body.nutrient.nutrient,
            quantity: req.body.nutrient.quantity,
            date: moment().format("L")
        }
    }
    Controller.updateNutrients(nutrientUpdateObj)
    res.redirect("http://localhost:3000/account")
});

app.get("/api/meal/getNutrients/:id", (req,res) =>{
    console.log("req makes it to server....")
    Controller.findByDate(req.params.id).then(nutrients => {
        res.send(sumNutrients(nutrients.Nutrients));
    })
})

app.post("/api/meal/mealtonutrients",(req,res) =>{
    console.log(req.body)
    let mealInput = req.body.meal.replace(/\s/g, "%20");
    const url = `https://api.edamam.com/api/nutrition-data?app_id=bb4ef363&app_key=3a18f5f3d25fda9cd5c879e6a11d13bc&ingr=1%20${mealInput}`
    axios.get(url)
    .then(result =>{
        let nuts = Object.values(result.data.totalNutrients);
        let nutrientArray = []
        for (i in nuts){
            let nutrientObject = {
                nutrient: nuts[i].label,
                quantity: nuts[i].quantity
            }
            nutrientArray.push(nutrientObject)
        }
        res.send(nutrientArray)
    })
})


module.exports = app;