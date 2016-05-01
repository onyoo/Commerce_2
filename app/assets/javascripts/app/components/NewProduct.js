var AddProduct = {
  templateUrl: 'app/templates/admin/newProduct.html',
  controller: function(categoryFactory, $scope, $compile) {
    var ctrl = this;

    ctrl.submit = function() {
      console.log($scope)
      debugger;
    };

    ctrl.i = 0;

    ctrl.categories = categoryFactory.query();

    $scope.insertSelection = function() {
      angular.element(document
        .querySelector('#select_area'))
        .append($compile('<span name="categories" >'+ $scope.form.categories[ctrl.i].name +'</span>')($scope));
      ++ctrl.i;
    };
  },
  controllerAs: 'addProduct'
};

angular
  .module('app')
  .component('addProduct', AddProduct);
