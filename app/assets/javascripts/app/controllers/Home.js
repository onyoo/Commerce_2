angular
  .module('app')
  .controller('Home', Home);

function Home($scope, Auth) {

  this.logout = Auth.logout; // logsout the user via DELETE request

  Auth.currentUser()
    .then(function(user) {
      $scope.user = user;
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
