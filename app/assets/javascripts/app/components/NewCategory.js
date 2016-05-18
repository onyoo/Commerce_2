var NewCategory = {
  templateUrl: 'app/templates/admin/newCategory.html',
  controller: function(categoryFactory, $scope, $rootScope) {
    var ctrl = this;


    ctrl.submitCategory = function() {
      categoryFactory.create({name: $scope.categoryForm.name}).$promise.then(function(resp) {
        $rootScope.$broadcast('addCategory', resp);
        ctrl.categories.push(resp);
        delete $scope.categoryForm.name;
      });
    };

    ctrl.deleteCategory = function(id) {
      categoryFactory.destroy({'id': id}).$promise.then(function(resp) {
        $rootScope.$broadcast('deleteCategory', resp);
        ctrl.categories.forEach(function(cat, i) {
          if(cat.name == resp.name) {
            ctrl.categories.splice(i,1)
          }
        })
      });
    };

    ctrl.i = 0;

    ctrl.categories = categoryFactory.query();


    ctrl.clearForm = function() {
      delete $scope.form;
    };

  },
  controllerAs: 'addCategory'
};

angular
  .module('app')
  .component('newCategory', NewCategory);
