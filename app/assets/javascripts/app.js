angular
  .module('app', ['ui.router', 'templates', 'ngResource', 'Devise', 'ngFileUpload', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'Home as home',
        abstract: true
      })
      .state('home.login', {
        url: 'login',
        templateUrl: 'app/templates/auth/login.html',
        controller: 'Session as session',
        onEnter: function(Auth, $state) {
          Auth.currentUser().then(function(resp) { // checks if user has already been logged-in returns user obj if called
            if(resp.id!==undefined && resp.email!== undefined){
              $state.go('home.index') //redirects index if signed in
            }
          });
        }
      })
      .state('home.register', {
        url: 'register',
        templateUrl: 'app/templates/auth/register.html',
        controller: 'Session as session',
        onEnter: function(Auth, $state) {
          Auth.currentUser().then(function(resp) { // checks if user has already been logged-in returns user obj if called
            if(resp.id!==undefined && resp.email!== undefined){
              $state.go('home.index') //redirects index if signed in
            }
          });
        }
      })
      .state('home.carts', {
        url: 'carts',
        templateUrl: 'app/templates/carts.html',
        controller: 'CartsCtrl as carts'
      })
      .state('home.index', {
        url: 'index',
        templateUrl: 'app/templates/index.html',
        controller: 'Index as index'
      })
      .state('home.product', {
        url: ':name/:id',
        templateUrl: 'app/templates/product.html',
        controller: 'Product as product'
      })
      .state('home.category', {
        url: 'categories/:name/:id',
        template: '<filter-bar products="category.products"></filter-bar>',
        controller: 'Category as category'
      })
      .state('home.admin', {
        url: ('admin'),
        templateUrl: 'app/templates/admin/admin.html',
        controller: 'Admin as admin'
      });
    $urlRouterProvider.otherwise('/index');
  });
