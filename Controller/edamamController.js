const axios = require("axios");
const db = require("../models");

// Defining methods for the edamamController

// findNutrient searches the edamam nutriention-data api 

// Returns the totalNutrients data set
module.exports = {
  findNutrient: function(req, res) {

    app.post("/api/addfood", (req, res) => {
        // var food = new User(req.body.item);
        db.User.create(req.body.meal)
            .then(meal => {
                res.send("item saved to database");
            })
            .catch(err => {
                res.status(400).send("unable to save to database")
            });
    })

 // https://api.edamam.com/api/nutrition-data?app_id=bb4ef363&app_key=3a18f5f3d25fda9cd5c879e6a11d13bc&ingr=1%20cheese%20pizza

    let mealInput = req.body.meal.replace(/\s/g, "%20");
    app.post('/api/addnutrients', (req, res) => {
        
    const url = `https://api.edamam.com/api/nutrition-data?app_id=bb4ef363&app_key=3a18f5f3d25fda9cd5c879e6a11d13bc&ingr=${mealInput}`
    axios.get(url)
        .then(results => 
        results.data.items.filter(
           result =>
            result.totalnutrients
        ),
        db.User.save()
            .then(totalnutrients => {
                res.send("item saved to database");
            })
            .catch(err => {
                res.status(400).send("unable to save to database")
            })
    )  
    // const foodJSON = results.data.items.totalnutrients;
    // res.send(JSON.stringify(foodJSON));
        
        .then(totalnutrients => res.json(totalnutrients))
        .catch(error => res.sendStatus(error.results.status))

    // app.post("/api/addnutrients", (req,res)=>{
    //     var nutrientData = new User(req.body.item);
    //     db.nutrientData.save()
    //         .then(totalnutrients => {
    //             res.send("item saved to database");
    //         })
    //         .catch(err => {
    //             res.status(400).send("unable to save to database")
    //         });
    });

    }

    
    
};