var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Статистика Роналду */
router.get('/ronaldo_statistic', function(req, res, next) {
    res.send("<h1>Голы Роналду</h1>")
});

/* Награды Роналду */
router.get('/ronaldo_awards', function(req, res, next) {
    res.send("<h1>Страница Карамельки</h1>")
});

/* Семья Роналду */
router.get('/ronaldo_family', function(req, res, next) {
    res.send("<h1>Страница Компота</h1>")
});

module.exports = router;
