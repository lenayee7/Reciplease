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

		// console.log("Req.user from udpate ".bgBlue, id); 
		console.log("Req.params.recipeId from udpate ".bgBlue, recipeId);
		 Recipe.findOne({_id: recipeId}, function(err, recipe) {
				console.log("Found recipe".bgBlue, recipe); 
			if(err) {
				console.log("ERROR", err); 
			} else {
				recipe.title = title || "";
				// console.log("req.body.title".bgGreen, title); 
				recipe.save(function(err, savedRecipe) {
					console.log("saved Recipe ".bgMagenta, savedRecipe); 
					if(err) {
						console.log("Error".bgRed, error); 
					} else {
						User.findOne({_id: id}, function(err, user) {
							if(err) {
								console.log("Error".bgRed, error); 
							} else {
								// var foundRecipe = user.recipes.id(recipeId);
								// foundRecipe = savedRecipe;
								// console.log("RECIPE".bgGreen, recipe); 
								// console.log("SAVEDRECIPE".bgGreen, savedRecipe); 
								user.save(function(err, user) {
									if(err) {
										console.log("Error".bgRed, error); 
									} else {
										console.log("User RECIPE ARRay UPDATED ".bgYellow, user); 
									}
								});
								// user.recipes.forEach(function(recipe) {
								// 	if(recipe._id == recipeId) {
								// 			console.log("recipe._id", recipe._id);
								// 			console.log("recipeId".bgCyan, recipeId);  
								// 		recipe = savedRecipe
								// 		console.log("What is recipe nowww?".bgYellow, recipe); 
								// 		console.log("What is the saved recipe nowww".bgGreen, savedRecipe); 
								// 			// console.log("What is recipe in foreach loop".bgGreen, recipe); 
								// 	}
								// 	// user.save(function(err, user) {
								// 	// 	if(err) {
								// 	// 		console.log("Error".bgRed, error); 
								// 	// 	} else {
								// 	// 		console.log("User RECIPE ARRay UPDATED ".bgYellow, user); 
								// 	// 	}
								// 	// });
								// });
							}
						});
					}
				});
			}
		});
	},


}



module.exports = recipesController;