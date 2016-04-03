var User = require('../models/user');

// User.find({}, function(err, users) {
//   if(err) {
//     console.log("Error".red, err); 
//   }
//     console.log("All Users", users);
// });

var usersController = {

index: function(req, res) {
    console.log("Here!"); 
   User.find({}, function(err, users) {
     console.log("Error".bgRed, err);
   	if(err) {
      console.log("Users so far ".green, users); 
    } 
    res.status(200).send(JSON.stringify(users));
  });
 },

create: function(req, res) {
    
	var newUser = new User(req.body);
    console.log("A New User".green, newUser); 

	newUser.save(function(err, savedUser) {
	 if(err) {
	 	console.log("Error".red, err); 
	 }
	 	console.log("User".green, savedUser);
    res.json(savedUser);
   });
 },

 destroy: function(req, res) {
    console.log('getting destroyed')
   User.findById(req.user, function(err,user) {
    if(err) {
    console.log("Error".bgRed, err); 
   }
    console.log("User".bgYellow, user);
    
   });
 }

}

module.exports = usersController;
