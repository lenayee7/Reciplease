'use strict';

app.controller('RecipesCtrl', RecipesCtrl);

RecipesCtrl.$inject = ['$scope', '$http', '$stateParams'];

function RecipesCtrl ($scope, $http, $stateParams) {
  var vm = this;
  	console.log("What is vm? ", vm); 
  vm.all = [];
  console.log("what is my scope? scope: ", vm.all)

  vm.newRecipe = {};
  vm.getRecipes = getRecipes;
  // vm.getGarden = getGarden;
  vm.createRecipe = createRecipe;
  // vm.deleteGarden = deleteGarden;
  // vm.updateGarden = updateGarden;

  getRecipes();

  function getRecipes() {
    $http
      .get('/api/recipes')
      .then(function(response) {
        console.log("The getRecipes: ", response.data)
        vm.all = response.data;
      })

  };

  function createRecipe() {
  	$http
	    .post('/api/recipes', vm.newRecipe)
	    .then(function(response) {
	      console.log("A new Recipe", response.data)
	      vm.all.push(response.data);
	      getRecipes();
	    })
	    vm.newRecipe = {}

  }








}

console.log("Hello Recipes Controller");




