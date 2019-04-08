// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new Book object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  Nutrients: [
    {
      nutrient: String,
      quantity: Number,
      date: String,
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model, capitalized to indicate generality. 
module.exports = User;