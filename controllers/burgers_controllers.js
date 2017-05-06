const express = require('express');
const db = require('../models');

const router = express.Router();

router.get("/", function(req, res) {
  //get all burgers from db via orm and send to express-handlebars
  //engine w/ `res.render`
  db.Burger.findAll().then(data => {
    res.render("index", {burgers: data})
  });
});


//these methods redirect to the root path, this makes it easy for us
//to change the client view from the template and then resend it with above
//method
router.post("/", function(req, res) {
  db.Burger.create({burger_name: req.body.name}).then(function() {
    res.redirect("/");
  });
});

router.put("/:name", function(req, res) {
  db.Burger.update({
    devoured: true
  },{
    where: {
      id: req.params.name
    }
  })
  .then(function() {
    res.redirect("/");
  });
});

module.exports = router;