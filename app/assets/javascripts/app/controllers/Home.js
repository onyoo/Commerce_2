
function Home($scope, Auth, productFactory, categoryFactory, $cookies) {
  var ctrl = this;

  ctrl.categories = categoryFactory.query();

  ctrl.logout = Auth.logout; // logsout the user via DELETE request

  Auth.currentUser()
    .then(function(user) {
      $scope.user = user;
      $cookies.put('user_id', user.id);
    });

  // listen for devise events
  $scope.$on('devise:new-registration', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:login', function(e, user) {
    $scope.user = user;
  });

  $scope.$on('devise:logout', function(e, user) {
    $scope.user = {};
  });

};


angular
.module('app')
.controller('Home', Home);
