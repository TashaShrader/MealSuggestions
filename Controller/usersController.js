const db = require("../models/User");
var moment = require('moment');
const mongoose = require('mongoose')
var now = moment().format("L")
console.log(now);





//return nutrients from today
let searchNutrientsByDate = function(nutsArrayElement){
    if(nutsArrayElement.date === now){
        return nutsArrayElement
    }
}
// Defining methods for the UsersController
module.exports = {
  findByDate: function(req, res) {
     db.find({name: req}, 'Nutrients')
     .then (docs =>{
         console.log(docs[10].Nutrients.map(searchNutrientsByDate))
     }).catch(err => console.log(err))
},
  createAccount: function(req, res) {
    console.log(req);
    db.create(req, (err,newDoc)=>{
      if(err) return err;
      console.log(newDoc)
      return newDoc;
    })
    res.json(res);
  },

//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
