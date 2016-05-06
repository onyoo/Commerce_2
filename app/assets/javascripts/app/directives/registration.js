
function RegistrationDirective () {
  return {
    restrict: 'A',
    templateUrl: 'app/templates/auth/registrationDir.html',
    controller: Session,
    link: function ($scope, element, attrs) {
      $scope.$on("registrationErrors", function(e, errors) {
        angular.forEach(errors, function(message,field) {
          $scope.form.$error[field] = message
        })
      });
    }
  }
};

angular
  .module('app')
  .directive('registrationDirective', RegistrationDirective);
