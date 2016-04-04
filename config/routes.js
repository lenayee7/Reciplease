var express 	   	= require('express'),
	app 		      	= express(),
	mongoose 	     	= require('mongoose'),
	bodyParser     	= require('body-parser'),
	methodOverride 	= require('method-override'),
	path 			      = require('path'),
	logger 			    = require('morgan'),
	colors 					= require('colors');
	usersController = require('../controllers/users')
	recipesController = require('../controllers/recipes')
	expressSession 	= require('express-session'),
	cookieParser   	= require("cookie-parser"),
	// expressSession  = require('express-session'),
	// cookieParser		= require('cookie-parser'),
	// usersController = require('../controllers/users')
	router 					= express.Router();

mongoose.connect('mongodb://localhost/precipes');

/*
 * HTML Endpoints
 */



router.route('/api/users')
	.get(usersController.index)
	.post(usersController.create);

// router.route('/api/users/:id')
// 	.delete(usersController.destroy);

router.route('/api/recipes')
	.get(recipesController.index)
	.post(recipesController.create);

module.exports = router;
