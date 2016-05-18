var NewProduct = {
  templateUrl: 'app/templates/admin/newProduct.html',
  controller: function(categoryFactory, $scope, $compile, productFactory, Upload) {
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
        }, function (error) {
        }, function (evt) {
          // file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
        $scope.$emit('newProduct', ctrl.product);
        delete $scope.form;
      });
    };

    ctrl.i = 0;

    ctrl.categories = categoryFactory.query();


    ctrl.clearForm = function() {
      delete $scope.form;
    };

    $scope.$on('addCategory', function(e, category) {
      ctrl.categories.push(category);
    });

    $scope.$on('deleteCategory', function(e, category) {
      ctrl.categories.forEach(function(cat, i) {
        if(cat.name == category.name) {
          delete ctrl.categories[i];
        };
      });
    });

  },
  controllerAs: 'addProduct'
};

angular
  .module('app')
  .component('newProduct', NewProduct);
