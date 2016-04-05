// var models = require('./models');
var mongoose = require('mongoose')
var Recipe = require('./recipe');
var User = require('./user');
mongoose.connect('mongodb://localhost/precipes');

// clear the database
// TODO: sychronize timing more explicitly to create actions below
User.remove({});
Recipe.remove({});

var user = {}
// database actions
// TODO: refactor with mongoose's `query.then()``...
user = {
  email: "win@gmail.com",
  username: "winsyee",
  password: "password",
  fullname: "Win Yee"
};

// create data
User.create(user, function(err, user) {
  
  console.log("created user:", user)

    var recipes = [
    {
      title: "Russian Tea Cookies",
      category: "Dessert",
      ingredients: "2 cups white powder thing",
      instructions: "1. Preheat Oven to 350 degrees",
      servings: "3",
      public: "true",
      userId: user._id
    },
    {
      title: "Buter Mochi",
      category: "Dessert",
      ingredients: "1 box Mochiko",
      instructions: "1. Sprinkle coconut flakes",
      servings: "12",
      public: "true",
      userId: user._id
    }
  ];
  // create recipes
  Recipe.create(recipes, function(err, recipes) {

    console.log("created recipes:", recipes)
        // disconnect from the database
    mongoose.disconnect();
  
});


     

  });

