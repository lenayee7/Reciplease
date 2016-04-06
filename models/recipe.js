var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var RecipeSchema = new Schema({
  // add default to dates...
  created: { type: Date },
  updated: { type: Date },
  title: String,
  category: String,
  ingredients: String,
  instructions: String,
  servings: Number,
  recipeUrl: String,
  imageUrl: String,
  keywords: String,
  public: Boolean,
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
});


var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
