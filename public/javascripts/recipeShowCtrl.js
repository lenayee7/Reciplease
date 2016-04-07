app.controller('recipeShowCtrl', recipeShowCtrl);

recipeShowCtrl.$inject = ['$scope', '$http', '$stateParams', '$state'];

function recipeShowCtrl ($scope, $http, $stateParams, $state) {

		var vm = this
		vm.newRecipe = {};
		vm.getRecipe = getRecipe;
		vm.updateRecipe = updateRecipe;
		vm.showEditForm = false;
		// console.log("vm from recipe show vm is ", this); 
	// $scope.hello = "Recipe Show Page working"
			getRecipe();
			// updateRecipe();

	function getRecipe (recipe) {
		var recipeId = $stateParams.recipeId
			// console.log("the state params recipe id ", recipeId); 
		var url = 'api/profile/recipes/' + recipeId;
			// console.log("url ", url); 
		$http
			.get(url)
			.then(function(response) {
				// console.log("What is the response for recipe ", response.data); 
			 $scope.recipe = response.data
			});
	}

	function updateRecipe (recipe) {
		var recipeId = $stateParams.recipeId
			console.log("the state params updated recipe id ", recipeId); 
			var url = 'api/profile/recipes/' + recipeId;

		$http
			.put(url, vm.newRecipe)
			.then(function (response) {
					console.log("Updating Recipe", response);
					console.log("Am I hitting update?"); 
				$scope.recipe = response.data;
				$state.go('recipeshow');
		});
	}	

}


