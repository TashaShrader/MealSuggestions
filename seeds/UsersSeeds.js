const controller = require("../Controller/usersController")
const moment = require("moment")
const mongoose = require("mongoose")

var databaseUrl = "MealSearch";

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl;

mongoose.connect (MONGODB_URI,{useNewUrlParser: true}, err => console.log(err)) ;


const Mitch1 = {
    name: "Mitch",
    email: "SVGPathSegCurvetoCubicSmoothAbs",
    Nutrients: [{
        nutrient: "calcium",
        quantity: 10,
        date: moment().format("L")
    }]
}; 
 const Mitch2 = {
        name: "Mulch",
        email: "sickTats@rock.com",
        Nutrients: [{
            nutrient: "pizzazz",
            quantity: 10000000000,
            date: moment().format("L")
        }]
    } 
    const Mitch3 = { 
        name: "Munch",
        email: "reliable@yahoo.com",
        Nutrients: [{
            nutrient: "pizzazz",
            quantity: 0,
            date: moment().format("L")
        }]
    }

// controller.create(Mitch1);
// controller.create(Mitch2);
// controller.create(Mitch3);
// console.log(controller.findByDate("Mulch"));
// let nutrientUpdateObj = {
//     email: "mitburr@gmail.com",
//     nutrient: {
//         nutrient: "Taste of Freedom",
//         quantity: 0.5,
//         date: moment().format("L")
//     }
// }
// controller.updateNutrients(nutrientUpdateObj)
controller.findByDate("mitburr@gmail.com")