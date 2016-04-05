angular.module('RecipeFactory', [])

.factory('Recipe', ['$resource', function($resource) {

	return $resource('/api/recipes/:id', { id: '@_id' },
	{
	  'update': { 
	  		method:'PUT' 
	  }
	  // query: {
	  // 	isArray: true,
	  // 	transformResponse: function(data) {
	  // 			console.log("These are factory recipes ", angular.fromJson(data)); 
	  // 		return angular.fromJson(data);
	  // 	}
	  // }
	});
	
	// return {message: "OMg this is my factory"}
}])

// RecipeFactory.$inject = ['$resource'];
// function RecipeFactory($resource) {
// }
console.log("Hello factory")