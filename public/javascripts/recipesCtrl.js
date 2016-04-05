'use strict';

app.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', 'Recipe'];
 
function RecipesCtrl ($scope, Recipe) {
	 	// console.log("What is Recipe? ", Recipe); 
			var vm = this;
				// console.log("What is vm? ", vm); 
			vm.allRecipes = Recipe.query();
			// $scope.recipes = Recipe.query();
				// vm.recipe = {};
				console.log("vm.recipes are... ", vm.allRecipes); 
			//if above doesn't update view, try `.$apply`
			// $scope.$apply(function() {
	  	//   $scope.recipes = Recipe.query();
			// });
		
			// vm.createRecipe = createRecipe;


			vm.createRecipe = function() {
				var newRecipe = Recipe.save(vm.recipe);
					vm.recipe = {};
						console.log("New Recipe from ang ", newRecipe); 
					vm.allRecipes.unshift(newRecipe);
					//TODO: clear the form;
					//TODO: display the new recipe in recipes!
			};




}
	
// }]);

console.log("Recipes Controller working");

