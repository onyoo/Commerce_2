
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

  $scope.$on('addCategory', function(e, category) {
    ctrl.categories.push(category);
  });

  $scope.$on('deleteCategory', function(e, category) {
    ctrl.categories.forEach(function(cat, i) {
      if(cat.id===category.id){
        delete ctrl.categories[i];
      };
    });
  });

};


angular
  .module('app')
  .controller('Home', Home);
