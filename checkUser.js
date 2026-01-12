var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/CR7")
var User = require("./models/user.js").User


var first_user = new User({
   username: "Sanya",
   password: "qwerty"
})


first_user.save();