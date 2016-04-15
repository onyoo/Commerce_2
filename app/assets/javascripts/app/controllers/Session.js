angular
  .module('app')
  .controller('Session', Session);

function Session($scope, $state, Auth) {
  var ctrl = this;

  ctrl.login = function() {
    Auth.login(ctrl.user).then(function(resp) {
      $state.go('home.index');
    }, function(error) {
      debugger;
    });
  };

  ctrl.logout = function() {
    debugger;
    Auth.logout(ctrl.user).then(function(resp) {
      $state.go('home.index');
    }, function(error){
      debugger;
    });
  };

};
