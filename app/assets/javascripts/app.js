angular
  .module('app', ['ui.router', 'templates', 'ngResource', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'Home as home'
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'app/templates/login.html',
        controller: 'Session as session',
        onEnter: function(Auth, $state) {
          Auth.currentUser().then(function(resp) { // checks if user has already been logged-in returns user obj if called
            if(resp.id!==undefined && resp.email!== undefined){
              $state.go('home') //redirects home if signed in
            }
          });
        }
      })
      .state('home.carts', {
        url: 'carts',
        templateUrl: 'app/templates/carts.html',
        controller: 'CartsCtrl as carts'
      });
    $urlRouterProvider.otherwise('/');
  });
