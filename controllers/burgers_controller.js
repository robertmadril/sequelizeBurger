var express = require("express");

var router = express.Router();

var db = require("../models");

//GET route returns all items in the DB
router.get("/", function (req, res) {

  db.Burger.findAll({}).then(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burger/", function (req, res) {

  db.Burger
    .create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
    .then(function (result) {

      res.json({ id: result.insertId });

    })
    .catch(function (err) {
      res.json(err);
    });

});


router.put("/api/burger/:id", function (req, res) {

  db.Burger.update({
    devoured: req.body.devoured
  }, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch(function (err) {
      res.json(err);
    });
});


module.exports = router;