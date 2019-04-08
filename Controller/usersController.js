const db = require("../models/User");
var moment = require('moment');
const mongoose = require('mongoose')
var now = moment().format("L")


var databaseUrl = "MealSearch";

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl;

mongoose.connect (MONGODB_URI,{useNewUrlParser: true}, err => console.log(err)) ;



// Defining methods for the UsersController
module.exports = {
  findByDate: function (req) {
    return db.find({ email: req }, 'Nutrients')
      .then(docs => {
        return docs[0];
      }).catch(err => console.log(err))
  },
  createAccount: function (req) {
    //check if account exists
    //because I couldn't get the unique property to register :[
    let validator = false;
        db.find({ email: req.email })
        .then(docs => {
          console.log(docs);
          if (docs) {validator = true}
          else{ validator = false}
        })
        console.log(validator);
        if(validator){
          return "account already created"
        }

    return db.create(req, (err, newDoc) => {
      if (err) return err;
      console.log(newDoc)
      return newDoc
    })

  },
  updateNutrients: function (req) {
    console.log(req)
    return db.findOneAndUpdate(
      { email: req.email },
      { $push: { Nutrients: req.nutrient } }/* <= this is where the data from nutrients will go */)
      .then(dbModel => { return dbModel })
      .catch(err => {
        console.log(err)
        return err;
      });
  },
  //   remove: function(req, res) {
  //     db.User
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
