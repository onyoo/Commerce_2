var NewProduct = {
  templateUrl: 'app/templates/admin/newProduct.html',
  controller: function(categoryFactory, $scope, $compile, productFactory, categoryFactory, Upload) {
    var ctrl = this;

    ctrl.submit = function() {
      productFactory.create({product: $scope.form}).$promise.then(function(resp){
        ctrl.product = resp;
        Upload.upload({
          url: '/api/v1/products/' + resp.id,
          method: 'PATCH',
          data: {'product_image': $scope.form.product_image},
        }).then(function (response) {
          ctrl.product.image_url = response.data.url
        }, function (response) {
          // if (response.status > 0)
          //   $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          // file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
        $scope.$emit('newProduct', ctrl.product);
        delete $scope.form;
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

    ctrl.deleteCategory = function(category_id) {
      categoryFactory.delete({id: category_id}).$promise.then(function(resp) {
        $scope.$emit('deleteCategory', resp);
        ctrl.categories.forEach(function(cat, i) {
          if(cat.id===resp.id){
            angular.element(document.querySelector('#cat_id_'+category_id)).remove($compile())($scope);
            delete ctrl.categories[i];
          };
        });
      });
    };

    constructInsert = function() {
      return [
        '<span ',
      'name="categories" ',
      'class="cat_id_'+ $scope.form.categories[ctrl.i].id +'" ',
      '>' + $scope.form.categories[ctrl.i].name + '',
      '<img src="/system/site_images/close_button.png" ',
      'ng-click="addProduct.remove('+ $scope.form.categories[ctrl.i].id +')"',
      'alt="delete categry button" ',
      'id="cat_id_{{cat.id}}" ',
      'class="close_button"><br></span>'].join('')
    };

  },
  controllerAs: 'addProduct'
};

angular
  .module('app')
  .component('newProduct', NewProduct);
