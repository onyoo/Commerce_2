angular
  .module('app', ['ui.router', 'templates', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'Index as index',
        resolve: {
          something: function() {
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
