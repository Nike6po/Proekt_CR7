const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2025');


var { Footballer } = require('./models/footballer.js')

var footballer = new Footballer({
    title: "Роналду",
    nick: "Ronaldo"
})

footballer.save();