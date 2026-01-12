const mongoose = require('mongoose');
const Footballer = require('./models/footballer').Footballer;
const data = require('./data').data;

mongoose.connect('mongodb://localhost/CR7');

async function run() {
    await Footballer.deleteMany();
    await Footballer.insertMany(data);
    console.log('Данные загружены');
    mongoose.disconnect();
}

run();