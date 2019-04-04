const db = require("../models/User");
var moment = require('moment');

var now = moment();
console.log(now);

// Defining methods for the UsersController
module.exports = {
  findByDate: function(req, res) {
    db.find({name: req}, 'Nutrients',  (err, docs) =>{
        if (err) console.log (err);
        else{
            console.log(docs);
        }
    })
  },
  create: function(req, res) {
      console.log(req)
    db.create(req, (err,dbModel)=>{
        // res.json(dbModel);
    })
    //   .then((err, dbModel) => {console.log(err);
    //       res.json(dbModel)
    // console.log(dbModel)})
    //   .catch(err => {console.log(err);
    //       res.status(422).json(err)});
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
