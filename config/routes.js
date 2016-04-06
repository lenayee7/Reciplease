var express 	   		= require('express'),
	app 		      		= express(),
	mongoose 	     		= require('mongoose'),
	bodyParser     		= require('body-parser'),
	methodOverride 		= require('method-override'),
	path 			      	= require('path'),
	logger 			    	= require('morgan'),
	colors 						= require('colors'),
	expressSession 		= require('express-session'),
	cookieParser   		= require('cookie-parser'),
	auth 							= require('../resources/auth'),
	// expressSession  = require('express-session'),
	// cookieParser		= require('cookie-parser'),
	usersController 	= require('../controllers/users')
	recipesController = require('../controllers/recipes')
	router 						= express.Router();

mongoose.connect('mongodb://localhost/precipes');

/*
 * JSON User Endpoints
 */

router.route('/api/users')
	.get(usersController.index)
	.post(usersController.create);

// router.route('/api/users/:id')
// 	.get(auth.ensureAuthenticated, usersController.showUser)
// 	.put(auth.ensureAuthenticated, usersController.editUser);
// 	.delete(usersController.destroy);

router.route('/api/recipes')
	.get(recipesController.allRecipesIndex)
	.post(auth.ensureAuthenticated, recipesController.create);


router.route('/api/profile/recipes')
	.get(auth.ensureAuthenticated, recipesController.getUserRecipes);

router.route('/api/profile/recipes/:recipe_id')
	.get(auth.ensureAuthenticated, recipesController.getRecipe);



module.exports = router;
