var NewProduct = {
  templateUrl: 'app/templates/admin/newProduct.html',
  controller: function(categoryFactory, $scope, $compile, productFactory, categoryFactory) {
    var ctrl = this;

    ctrl.submit = function() {
      productFactory.create({product: $scope.form}).$promise.then(function(resp){
        $scope.$emit('newProduct', resp);
      });
    };

    ctrl.submitCategory = function() {
      categoryFactory.create({name: $scope.categoryForm.name}).$promise.then(function(resp) {
        $scope.$emit('addCategory', resp);
        ctrl.categories.push(resp);
        delete $scope.categoryForm.name;
      });
    };

    ctrl.i = 0;

    ctrl.categories = categoryFactory.query();

    ctrl.remove = function(id) {
      var keys_array = Object.keys($scope.form.categories);
      for( i in keys_array) {
        if($scope.form.categories[keys_array[i]].id === id) {
          delete $scope.form.categories[keys_array[i]];
          angular.element(document.querySelector('.cat_id_'+id)).remove();
        };
      };
    };

    ctrl.clearForm = function() {
      delete $scope.form;
    };

    $scope.insertSelection = function() {
      angular.element(document
        .querySelector('#select_area'))
        .append($compile('<span name="categories" class="cat_id_'+ $scope.form.categories[ctrl.i].id +'" ng-click="addProduct.remove('+ $scope.form.categories[ctrl.i].id +')" >' + $scope.form.categories[ctrl.i].name + '<br></span>')($scope));
      ++ctrl.i;
    };
  },
  controllerAs: 'addProduct'
};

angular
  .module('app')
  .component('newProduct', NewProduct);
