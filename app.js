//
// Crippl.es
//
// @author Shane Curran
// @author Rory Hughes
//
// @git https://github.com/narruc/Crippl.es
//

// Include all the necessary libraries etc.
var express   = require("express");
var app       = express();
var jade      = require("jade");
var sequelize = require("sequelize");

var db        = new sequelize("cripples", {
  dialect: "sqlite"
});

app.listen(process.env.port || 3000);