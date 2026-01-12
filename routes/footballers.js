var express = require('express');
var router = express.Router();
var Footballer = require('../models/footballer').Footballer;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cats');
});

/* Страница Футболистов */
router.get("/:nick", async function(req, res, next) {
    var footballers = await Footballer.find({nick: req.params.nick});
    console.log(footballers)
    if(!footballers.length) return next(new Error("Нет такого Футболиста в футбольном мире"))
      var footballer = footballers[0];
      res.render('footballer', {
          title: footballer.title,
          picture: footballer.avatar,
          desc: footballer.desc
       })

});

module.exports = router;