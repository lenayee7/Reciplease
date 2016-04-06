app.controller('recipeShowCtrl', recipeShowCtrl);

recipeShowCtrl.$inject = ['$scope', '$http', '$stateParams'];

function recipeShowCtrl ($scope, $http, $stateParams) {

		var vm = this
		vm.getRecipe = getRecipe;
		console.log("vm from recipe show vm is ", this); 
	// $scope.hello = "Recipe Show Page working"
			getRecipe();

	function getRecipe (recipe) {
		var recipeId = $stateParams.recipeId
			console.log("the state params recipe id ", recipeId); 
		var url = 'api/profile/recipes/' + recipeId;
			console.log("url ", url); 
		$http
			.get(url)
			.then(function(response) {
				// console.log("What is the response for recipe ", response.data); 
			 $scope.recipe = response.data
			});
	}

}


