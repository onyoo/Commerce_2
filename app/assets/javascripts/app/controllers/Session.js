angular
  .module('app')
  .controller('Session', Session);

function Session($scope, Auth) {
  var ctrl = this;

  ctrl.signedIn = Auth.isAuthenticated;
  ctrl.logout = Auth.logout;

  ctrl.login = function() {
    Auth.login(ctrl.user).then(function(resp) {
      debugger;
    });
  };

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
