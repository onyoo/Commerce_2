
function LoginDirective () {
  return {
    restrict: 'A',
    templateUrl: 'app/templates/auth/loginDir.html',
    controller: Session,
    link: function ($scope, element, attrs) {
      $scope.$on("loginErrors", function(e, error) {
          $scope.error = error;
      });
    }
  }
};

angular
  .module('app')
  .directive('loginDirective', LoginDirective);
