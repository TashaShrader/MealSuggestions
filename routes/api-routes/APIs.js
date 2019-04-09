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
    let nutrientUpdateObj = {
        email: req.email,
        nutrient: {
            nutrient: req.nutrientName,
            quantity: req.nutrientQuantity,
            date: moment().format("L")
        }
    }
    controller.updateNutrients(nutrientUpdateObj)
});

app.get("/api/meal/getNutrients/:id", (req,res) =>{
    console.log("req makes it to server....")
    Controller.findByDate(req.params.id).then(nutrients => {
        res.send(sumNutrients(nutrients.Nutrients));
    })
})


module.exports = app;