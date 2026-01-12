var User = require("../models/user").User;


module.exports = async function(req,res,next){
   res.locals.user = null


  var user =  await User.findById(req.session.user_id);
  if (user) {            // если пользователь найден
   res.locals.user = user;
} else {
   res.locals.user = null; // иначе оставляем null
}
next();
}