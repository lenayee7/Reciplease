app.controller('userRecipeCtrl', userRecipeCtrl);

// userRecipeCtrl.$inject = ['userRecipeService'];
userRecipeCtrl.$inject = ['$scope', '$http', '$stateParams'];


function userRecipeCtrl ($scope, $http, $stateParams) {
	
	var vm = this;
	vm.userRecipes = {};
	vm.getUserRecipes = getUserRecipes;

	// console.log("vm what is this", this); 

	getUserRecipes();




	function getUserRecipes () {
		$http
			.get('/api/profile/recipes')
			.then(function(response) {
					console.log("User Recipes ", response.data); 
			 vm.userRecipes = response.data
			})
	}

}
