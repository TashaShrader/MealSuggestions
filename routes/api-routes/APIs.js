//dependency
var express = require('express')
var axios = require("axios");
var Router = require("express").Router();
var controller = require("../../Controller/usersController")
var mongoose = require("mongoose");

//only api routes run to the router
//therefore this represents "/api/"
// Router.route("/")
//     .get

//by the same logic, this is /api/login
Router.route("/login")
    .post(controller.createAccount)

// app.post('/login', function (req, res) {
//     //Normally, you would fetch the user from the database here.
//     //then save the relevant info in user details
//     db.person.findOne({
//         where: {
//             userID: req.body.Username,
//         },
//     }).then((function (userObj) {
//         //test for userObj being found
//         if (!userObj) { return res.sendStatus(404) }


//         else if (userObj.password === req.body.Password) {
//             console.log(userObj.id);

//             user = {
//                 Username: userObj.userID,
//                 Password: userObj.password,
//             }

//             jwt.sign(user, JWT_SECRET_KEY, JWT_OPTIONS,
//                 function (err, token) {
//                     if (err) return res.sendStatus(500).json(err) //do some error checking
//                     else {
//                         res.json({
//                             user,
//                             Token: token,
//                         })
//                     }
//                 })
//         }
//         else {
//             res.sendStatus(401).send();
//         }
//     })).catch(function (err) {
//         return res.sendStatus(500).json(err)
//     });
// })

// let verifyToken = function (req, res, next) {
//     //declare the token from each request. 
//     //The token is sent automatically in a cookie,
//     // cookie_parser allows us to read the cookie easily
//     const token = req.cookies.Token;
//     //first determine if a token is found
//     if (token) {
//         //with this nested if I verify the token. 
//         //the callback in jwt.verify will return true if verified w/ jwt's verified.
//         //the contents of the if statement are actually just the next() function
//         if (jwt.verify(token, JWT_SECRET_KEY, function (err, data) {
//             //self explanatory: not verified => forbidden.
//             //interestingly, this does succesfully end the verifyToken function as if it was returned. 
//             if (err) { res.sendStatus(403) }
//             //return true to fulfill the if, token verified for testing
//             else {
//                 console.log("token verified")
//                 return true
//             }
//         })
//         ); {
//             //next() is what makes the middleware function continue to the next function
//             next();
//         }
//     } else {
//         //403 means forbidden, slightly stronger than unauthorized.
//         //this is else if the token is not found in cookies. 
//         res.sendStatus(403);
//     }
// }


module.exports = Router;