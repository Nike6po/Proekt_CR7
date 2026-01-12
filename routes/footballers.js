var express = require('express');
var router = express.Router();
var Footballer = require('../models/footballer').Footballer;
var checkAuth = require("../middlewares/checkAuth.js");

/* Страница Футболистов */
router.get("/:nick", checkAuth, async function(req, res, next) {
    var footballers = await Footballer.find({nick: req.params.nick});
    console.log(footballers)
    if(!footballers.length) return next(new Error("Нет такого Футболиста в футбольном мире"))
      var footballer = footballers[0];
      res.render('cr_main', {
          title: footballer.title,
          picture: footballer.avatar,
          desc: footballer.desc
       })

});

module.exports = router; 