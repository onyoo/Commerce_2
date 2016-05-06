
function Session($scope, $state, Auth) {
  var ctrl = this;

  ctrl.login = function() {
    Auth.login(ctrl.user).then(function(resp) {
      $state.go('home.index');
    }, function(errorResp) {
      $scope.$emit('loginErrors', errorResp.data.error);
    });
  };

  ctrl.register = function() {
    $scope.form.$error = {}
    Auth.register(ctrl.user).then(function(resp) {
      $state.go('home.index');
    }, function(errorResp) {
      $scope.$emit('registrationErrors', errorResp.data.errors);
    });
  };

};

angular
  .module('app')
  .controller('Session', Session);
