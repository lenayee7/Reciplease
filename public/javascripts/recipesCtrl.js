'use strict';

var RecipesCtrl = angular.module('RecipesCtrl', []);

RecipeFactory.$inject = ['$resource'];
function RecipeFactory($resource) {
	return $resource('/api/recipes/:id', { id: '@_id' },
	{
	  'update': { method:'PUT' }
	});
}

RecipesCtrl.controller('RecipesCtrl', ['$scope', 'Recipe', function($scope, Recipe) {
		console.log('WORKING'); 
		$scope.hello = Recipe.message
}]);





console.log("controller loaded");

