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

	getUserRecipes: function(req, res) {
		var id = req.user
			// console.log("What is userID??".bgYellow, id); 
			User.findById({_id: id}, function (err, userRecipes) {
				if(err) {
					console.log("Error".bgRed, err); 
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
			 //find user first
			 //push recipe in the user then save
			// newRecipe.save(function(err, savedRecipe) {
			//  if(err) {
			//  	console.log("Error".red, err); 
			//  }
			//  	console.log("Saved Recipe is".bgYellow, savedRecipe);
		 //    // res.status(200).send(JSON.stringify(savedRecipe));
		 //    res.redirect('/api/profile')
		 //   });
	}






}



module.exports = recipesController;