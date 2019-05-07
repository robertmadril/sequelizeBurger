var express = require("express");

var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync().then(function () {

  app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);
  })
});

/*
To-Do

Update controller file with sequelize methods
associate customer model with burger model and create foreign key relationship
Set values of burger and customre name to null
order options by sort method

*/