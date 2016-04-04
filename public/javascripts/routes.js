// 'use strict';
// ////////////
// // ROUTES //
// ////////////
//     console.log("config loaded");
    
// var ConfigRoutes = angular.module('ConfigRoutes', []);

// ConfigRoutes.config("ConfigRoutes", ["$stateProvider", "$urlRouterProvider", "$locationProvider",
//   function($stateProvider, $urlRouterProvider, $locationProvider) {

//   //this allows us to use routes without hash params!
//   $locationProvider.html5Mode({
//     enabled: true,
//     requireBase: false
//   });

//   // for any unmatched URL redirect to /
//   $urlRouterProvider.otherwise("/");

//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: 'templates/home.html',
//       controller: 'HomeController',
//       controllerAs: 'home'
//     })
//     .state('signup', {
//       url: '/signup',
//       templateUrl: 'templates/signup.html',
//       controller: 'SignupController',
//       controllerAs: 'sc',
//       resolve: {
//         skipIfLoggedIn: skipIfLoggedIn
//       }
//     })
//     .state('login', {
//       url: '/login',
//       templateUrl: 'templates/login.html',
//       controller: 'LoginController',
//       controllerAs: 'lc',
//       resolve: {
//         skipIfLoggedIn: skipIfLoggedIn
//       }
//     })
//     .state('logout', {
//       url: '/logout',
//       template: null,
//       controller: 'LogoutController',
//       resolve: {
//         loginRequired: loginRequired
//       }
//     })
//     .state('profile', {
//       url: '/profile',
//       templateUrl: 'templates/profile.html',
//       controller: 'ProfileController',
//       controllerAs: 'profile',
//       resolve: {
//         loginRequired: loginRequired
//       }
//     })


//     function skipIfLoggedIn($q, $auth) {
//       var deferred = $q.defer();
//       if ($auth.isAuthenticated()) {
//         deferred.reject();
//       } else {
//         deferred.resolve();
//       }
//       return deferred.promise;
//     }

//     function loginRequired($q, $location, $auth) {
//       var deferred = $q.defer();
//       if ($auth.isAuthenticated()) {
//         deferred.resolve();
//       } else {
//         $location.path('/login');
//       }
//       return deferred.promise;
//     }


// }]);