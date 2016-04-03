var Recipe = require('../models/recipe')

var recipesController = {

index: function(req, res) {
	Recipe.find({}, function(err, allRecipes) {
		if(err) {
			console.log("Error".bgRed, err); 
		}
			console.log("allRecipes are ".bgYellow, allRecipes); 
 	});
},

create: function(req, res) {
	var newRecipe = new Recipe(req.body);
	 console.log("A New Recipe".bgMagenta, newRecipe); 

	newRecipe.save(function(err, savedRecipe) {
	 if(err) {
	 	console.log("Error".red, err); 
	 }
	 	console.log("Saved Recipe is".bgYellow, savedRecipe);
    res.json(savedRecipe);
   });

}






}



module.exports = recipesController;