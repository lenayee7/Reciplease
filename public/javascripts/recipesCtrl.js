'use strict';

app.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', 'Recipe'];

function RecipesCtrl ($scope, Recipe) {
			var vm = this;
				console.log(vm); 
			// vm.recipes = Recipe.query();
			$scope.recipes = Recipe.query();
				vm.recipe = {};
				console.log("$scope.recipes are ", vm.recipes); 
			//if above doesn't update view, try `.$apply`
			// $scope.$apply(function() {
	  	//   $scope.recipes = Recipe.query();
			// });
		
			// vm.createRecipe = createRecipe;


			vm.createRecipe = function() {
				var newRecipe = Recipe.save(vm.recipe);
					vm.recipe = {};
						console.log("New Recipe from ang ", newRecipe); 
					vm.recipes.unshift(newRecipe);
					//TODO: clear the form;
					//TODO: display the new recipe in recipes!
			};


console.log("recipes controller loaded");

}
	
// }]);

console.log("recipes Pcontroller page loaded");




