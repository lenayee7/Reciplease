'use strict';

app.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', 'Recipe', '$http', '$stateParams', '$state'];
 
function RecipesCtrl ($scope, Recipe, $http, $stateParams, $state) {
	 	// console.log("What is Recipe? ", Recipe); 
			var vm = this;
				// console.log("What is vm? ", vm); 
			vm.allRecipes = Recipe.query();
			// vm.userRecipes = getUserRecipes;
				console.log("vm.allRecipes are... ", vm.allRecipes); 
			//if above doesn't update view, try `.$apply`
			// $scope.$apply(function() {
	  	//   $scope.recipes = Recipe.query();
			// });
		
			// vm.createRecipe = createRecipe;



			vm.createRecipe = function() {
				var newRecipe = Recipe.save(vm.recipe);
					vm.recipe = {};
					if(!newRecipe) {
							console.log("Error didn't create new recipe"); 
						// console.log("New Recipe from ang ", newRecipe); 
					} else {
						vm.allRecipes.unshift(newRecipe);
						vm.newRecipe = {};
						$state.go('recipes');
						// $location.path('/profile/recipes');
					}
			};

}
	
// }]);

console.log("Recipes Controller working");

