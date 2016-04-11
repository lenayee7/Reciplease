'use strict';

app.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', 'Recipe', '$http', '$state', '$stateParams'];
 
function RecipesCtrl ($scope, Recipe, $http, $state, $stateParams) {
	 			// console.log("What is Recipe? ", Recipe); 
 			var widget = uploadcare.initialize('#recipe-image');
			var vm = this;
			$scope.orderProp = '-age';
			// vm.updateRecipeSchema = updateRecipeSchema;
				// console.log("What is vm? ", vm); 
			vm.allRecipes = Recipe.query();
				console.log("vm.allRecipes are... ", vm.allRecipes); 
			//if above doesn't update view, try `.$apply`
			// $scope.$apply(function() {
	  	//   $scope.recipes = Recipe.query();
			// });
			vm.createRecipe = function() {
				vm.recipe.imageUrl = $('#recipe-image').val();
				var newRecipe = Recipe.save(vm.recipe);
				$scope.category = "Appetizer"
					vm.recipe = {};
					if(!newRecipe) {
							console.log("Error didn't create new recipe"); 
						// console.log("New Recipe from ang ", newRecipe); 
					} else {
						vm.allRecipes.unshift(newRecipe);
						vm.newRecipe = {};
						$state.go('recipes');
					}
			};

			// function updateRecipeSchema (recipe) {
			// 	var recipeId = $stateParams.recipeId
			// 		console.log("the state params updateRecipeSchema recipe id ", recipeId); 
			// 		var url = 'api/recipes';

			// 	$http
			// 		.put(url, vm.newRecipe)
			// 		.then(function (response) {
			// 				console.log("Updating Recipe", response);
			// 				console.log("Am I hitting update in recipeSchema"); 
			// 			$scope.recipe = response.data;
			// 			// $state.go('recipeshow');
			// 	});
			// }	

}
	
// }]);

console.log("Recipes Controller working");

