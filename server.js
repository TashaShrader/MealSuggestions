//BOILERPLATE AND REQUIRES
const express = require("express");
const path = require("path");
// const apiRoutes = require('./routes/api-routes')
// const htmlRoutes = require('./routes/html-routes')
var mongoose = require("mongoose")
//express server opened
const app = express();
//|------------------------------------------------------------------------------------------------|

//HEROKU DEPLOYMENT SERVER BOILERPLATE

//or instantiated to open a port for Heroku
const PORT = 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//|------------------------------------------------------------------------------------------------|
// DATABASE CONFIGURATION: MONGO
var databaseUrl = "MealSearch";

// Hook mongojs configuration to the db variable

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl;

mongoose.connect (MONGODB_URI,{useNewUrlParser: true}, err => console.log(err)) ;
//|------------------------------------------------------------------------------------------------|

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API apiRoutes here
// app.use(apiRoutes);
// Send every other request to the React app
// Define any API apiRoutes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
