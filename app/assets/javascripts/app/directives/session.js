
function SessionDirective () {
  return {
    restrict: 'A',
    templateUrl: 'app/templates/auth/sessionsDir.html',
    controller: Session,
    link: function ($scope, element, attrs) {
      $scope.$on("registrationErrors", function(e, errors) {
        angular.forEach(errors, function(message,field) {
          $scope.form.$error[field] = message
          // debugger;
        })
      });
    }
  }
};

angular
  .module('app')
  .directive('sessionDirective', SessionDirective);
