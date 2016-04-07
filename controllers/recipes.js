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

	getRecipe: function(req, res) {
		var userId = req.user
				// console.log("user id from get recipe ".bgMagenta, userId);
		var recipeId = req.params.recipe_id;
					// console.log("getRecipe ID".bgMagenta, recipeId); 
		Recipe.findById(recipeId, function(err, recipe) {
			if(err) {
				console.log("Error".bgRed, err); 
			}
			res.send(recipe)
				// console.log("Sending this recipe back ".bgYellow, recipe); 
		});
			
	},

	getUserRecipes: function(req, res) {
		var id = req.user
			// console.log("What is userID??".bgYellow, id); 
			User.findById({_id: id}, function (err, userRecipes) {
				if(err) {
					// console.log("Error".bgRed, err); 
				}
				res.send(JSON.stringify(userRecipes.recipes.reverse()));
				// console.log("userRecipes are ".bgYellow, userRecipes.recipes); 
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
		// var newRecipe = new Recipe(params);
		 console.log("A New Recipe".bgMagenta, newRecipe); 

		Recipe.create(newRecipe, function(err, savedRecipe) {
				// console.log("A saved recipe".bgGreen, savedRecipe); 
			if(err) {
				console.log("Error".bgRed, err); 
			} else {

				User.findById(id, function(err, user) {
					console.log("My saved recipe".bgGreen, savedRecipe); 
					user.recipes.push(savedRecipe);
					user.save(function(err, user) {
						if(err) {
							console.log("Error".bgRed, err); 
						} else {
							console.log("new SAved userwith recipe".bgGreen, user); 
							// res.send(JSON.stringify(user.recipes.reverse()));
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
		var id = req.user
		var recipeId = req.params.recipe_id
		var title = req.body.title
		// var ingredients = req.body.ingredients
		// var instructions = req.body.instructions
		// var category = req.body.category
			// console.log("Req.user from udpate ".bgBlue, id); 
			// console.log("Req.params.recipeId from udpate ".bgBlue, recipeId);
	  User.findOne({_id: id}, function(err, user) {
			user.recipes.forEach(function(recipe) {
				// console.log("The recipe._id ".bgBlue, recipe._id); 
				// console.log("The recipeId ".bgGreen, recipeId); 
				if(recipe._id == recipeId) {
					recipe.title = title || "";
					console.log("req.body.title".bgGreen, title); 
					// Recipe.findOne({_id: recipeId}, function(err, foundRecipe) {
					// 		console.log("Found recipe".bgBlue, foundRecipe); 
					// 	if(err) {
					// 		console.log("ERROR", err); 
					// 	} else {
					// 		foundRecipe.title = title || "";
					// 		console.log("req.body.title".bgGreen, title); 
					// 		recipe.save(function(err, savedRecipe) {
					// 			if(err) {
					// 		console.log("Error".bgRed, error); 
					// 			} else {
					// 				console.log("saved recipe".bgMagenta, savedRecipe); 
					// 				// res.send(recipe);
					// 			}

					// 		});
					// 	}

					// });
					
				}
			});

			user.save(function(err, user) {
				// Recipe.findOne({_id: recipeId}, function(err, recipe) {
				// 	recipe.title = req.body.title;
				// 	recipe.save(function(err, recipe) {
						if(err) {
							console.log("Error".bgRed, error); 
						} else {
							console.log("saved user with updated recipes".bgMagenta, user); 
							// res.send(recipe);
						}

				// 	});
				// });
			});

		});
		// Recipe.findById(recipeId, function(err, foundRecipe) {
		// 	if(err) {
		// 		console.log("Error".bgRed, err); 
		// 	} else {
		// 			console.log("Found Recipe".bgYellow, foundRecipe); 
		// 			// if(title) foundRecipe.title = title; 
		// 			foundRecipe.title = title || "";
		// 			// if(ingredients) foundRecipe.ingredients = ingredients;
		// 			// if(instructions) foundRecipe.instructions = instructions;
		// 			// if(category) foundRecipe.category = category;

		// 			foundRecipe.save(function(err, updatedRecipe) {
		// 				if(err) {
		// 					console.log("Error".bgRed, err); 
		// 				} else {
		// 					console.log("Sending this UPDATEDrecipe back ".bgMagenta, updatedRecipe); 
		// 					res.send(updatedRecipe)
		// 				}
		// 			});
		// 	}	
			
		// });
	}					
				


}



module.exports = recipesController;