function Admin(productFactory, Upload, $scope, productFactory, categoryFactory, $http) {
  var ctrl = this;

  ctrl.products = productFactory.query();
  ctrl.categories = categoryFactory.query();

  ctrl.update = function(product, category) {
    categoryFactory.patch({id: category.id, 'product': product});
  }

  ctrl.uploadImage = function(image, invalid, id) {
    Upload.upload({
      url: '/api/v1/products/' + id,
      method: 'PATCH',
      data: { 'product_image': image }
    }).then(function(resp) {
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === id){
          ctrl.products[i].image_url = resp.data.url;
        }
      }
    }, function(error) {
      console.log(error);
    });

  };

  ctrl.changeName = function(productId, productName) {
    productFactory.patch({ name: productName, id: productId}).$promise.then(function(resp){
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === productId){
          ctrl.products[i] = resp;
        };
      };
      $scope.name = undefined;
    });
  };

  ctrl.changeInventory = function(productId, productInventory) {
    productFactory.patch({ inventory: productInventory, id: productId}).$promise.then(function(resp){
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === productId){
          ctrl.products[i] = resp;
        };
      };
      $scope.inventory = undefined;
    });
  };

  ctrl.changePrice = function(productId, productPrice) {
    productFactory.patch({ price: productPrice, id: productId}).$promise.then(function(resp){
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === productId){
          ctrl.products[i] = resp;
        };
      };
      $scope.price = undefined;
    });
  };

  ctrl.delete = function(productId) {
    if (confirm('Are you sure? This can not be undone!')) {
      productFactory.destroy({id: productId}).$promise.then(function(){
        for ( var i = 0; i < ctrl.products.length ; i++) {
          if(ctrl.products[i].id === productId){
            delete ctrl.products[i];
          };
        };
      })
    };
  };

  ctrl.removeCat = function(productId, categoryId) {
    var data = {
      params: {
        'product_id': productId,
        'category_id': categoryId
      }
    }
    $http.delete('/api/v1/category_items/' + 0, data).then(function(resp) {
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === productId){
          for ( var x = 0; x < ctrl.products[i].categories.length ; x++)
            if(ctrl.products[i].categories[x].id === categoryId){
              delete ctrl.products[i].categories[x];
            };
          };
        };
      });
    };


  $scope.$on('newProduct', function (emitEvent, product) { // from newProduct.js
    ctrl.products.push(product);
  });

  $scope.$on('addCategory', function(e, category) {
    ctrl.categories.push(category);
  });

};

angular
  .module('app')
  .controller('Admin', Admin);
