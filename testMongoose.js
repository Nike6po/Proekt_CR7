const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2025');


var Footballer = require('./models/footballer.js').Footballer

var footballer = new Footballer({
    title: "Награды Роналду",
    nick: "ronaldo_awards"
})

footballer.save();