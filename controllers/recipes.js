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
	 	});
	},

	getRecipe: function(req, res) {
		var userId = req.user
		var recipeId = req.params.recipe_id;
		Recipe.findById(recipeId, function(err, recipe) {
			if(err) {
				console.log("Error".bgRed, err); 
			}
			res.send(recipe)
		});
			
	},

	getUserRecipes: function(req, res) {
		var id = req.user
			User.findById({_id: id}, function (err, userRecipes) {
				if(err) {
					console.log("Error".bgRed, err); 
				}
				res.send(JSON.stringify(userRecipes.recipes.reverse()));
			})
	},

	create: function(req, res) {
		
		var id = req.user

		var newRecipe = {
			title: req.body.title,
			category: req.body.category,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions,
			servings: req.body.servings,
			public: req.body.public,
			recipeUrl: req.body.recipeUrl,
			imageUrl: req.body.imageUrl,
			description: req.body.description,
			postedBy: req.body.postedBy,
			userId: req.user
		}
		
		 console.log("A New Recipe".bgMagenta, newRecipe); 

		Recipe.create(newRecipe, function(err, savedRecipe) {
				
			if(err) {
				console.log("Error".bgRed, err); 
			} else {
				User.findById(id, function(err, user) { 
					user.recipes.push(savedRecipe);
					user.save(function(err, user) {
						if(err) {
							console.log("Error".bgRed, err); 
						} else {
							res.send(user)
						}
					});
					
				});
			}
		});
	},

	updateRecipe: function(req, res) {

		// ensure req.user === recipe.user_id // ensure the recipe belongs to the user
		// find user by id & ensure recipe's are being populated/included in the user
		// target the recipe by the recipe_id
		// update the recipe
		// save the user
		var id = req.user;
		var recipeId = req.params.recipe_id;
		var title = req.body.title;
		var description = req.body.description;
		var postedBy = req.body.postedBy;
		var ingredients = req.body.ingredients;
		var instructions = req.body.instructions;
		var imageUrl = req.body.imageUrl;
		var category = req.body.category;

		// console.log("Req.user from udpate ".bgBlue, id); 
		console.log("Req.params.recipeId from udpate ".bgBlue, recipeId);
		 Recipe.findOne({_id: recipeId}, function(err, recipe) {
				console.log("Found recipe".bgBlue, recipe); 
			if(err) {
				console.log("ERROR", err); 
			} else {
				recipe.title = title || "";
				recipe.description = description || "";
				recipe.postedBy = postedBy || "";
				recipe.ingredients = ingredients || "";
				recipe.instructions = instructions || "";
				recipe.imageUrl = imageUrl || "";
				recipe.category = category || "";

				recipe.save(function(err, savedRecipe) {
					console.log("saved Recipe ".bgMagenta, savedRecipe); 
					if(err) {
						console.log("Error".bgRed, error); 
					}
						console.log("SAVEDRECIPE".bgGreen, savedRecipe); 
						res.send(savedRecipe)
				});
			}
		});
	}

}



module.exports = recipesController;