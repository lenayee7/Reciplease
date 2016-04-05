var Recipe = require('../models/recipe')
var User = require('../models/user')

var recipesController = {

allRecipesIndex: function(req, res) {
	Recipe.find({}, function(err, allRecipes) {
		if(err) {
			console.log("Error".bgRed, err); 
		}
		console.log("recipes", allRecipes);
		res.send(JSON.stringify(allRecipes.reverse()));
			// console.log("allRecipes are ".bgYellow, allRecipes); 
 	});
},

create: function(req, res) {
		var userId = req.params.userId
		var newRecipe = new Recipe(req.body);
		 console.log("A New Recipe".bgMagenta, newRecipe); 

		newRecipe.save(function(err, savedRecipe) {
		 if(err) {
		 	console.log("Error".red, err); 
		 }
		 	console.log("Saved Recipe is".bgYellow, savedRecipe);
	    res.status(200).send(JSON.stringify(savedRecipe));
	    // res.redirect('/api/recipes')
	   });

}






}



module.exports = recipesController;