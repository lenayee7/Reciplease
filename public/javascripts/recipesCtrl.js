'use strict';

var RecipesCtrl = angular.module('RecipesCtrl', []);



RecipeFactory.$inject = ['$resource'];
function RecipeFactory($resource) {
	return $resource('/api/recipes/:id', { id: '@_id' },
	{
	  'update': { method:'PUT' }
	});
}

Recipes.Ctrl.controller('RecipesCtrl', ['$scope', 'Recipes', function($scope,Recipes) {
		console.log('WORKING'); 
	$scope.recipes = Recipes.query();
}]);





console.log("controller loaded");

