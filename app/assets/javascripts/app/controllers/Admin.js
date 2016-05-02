function Admin(productFactory, Upload, $scope, productFactory) {
  var ctrl = this;

  ctrl.products = productFactory.query();

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

  ctrl.changeName = function(product_id, product_name) {
    productFactory.patch({ name: product_name, id: product_id}).$promise.then(function(resp){
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === product_id){
          ctrl.products[i] = resp;
        };
      };
      $scope.name = undefined;
    });
  };

  ctrl.changeInventory = function(product_id, product_inventory) {
    productFactory.patch({ inventory: product_inventory, id: product_id}).$promise.then(function(resp){
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === product_id){
          ctrl.products[i] = resp;
        };
      };
      $scope.inventory = undefined;
    });
  };

  ctrl.changePrice = function(product_id, product_price) {
    productFactory.patch({ price: product_price, id: product_id}).$promise.then(function(resp){
      for ( var i = 0; i < ctrl.products.length ; i++) {
        if(ctrl.products[i].id === product_id){
          ctrl.products[i] = resp;
        };
      };
      $scope.price = undefined;
    });
  };

  ctrl.delete = function(product_id) {
    if (confirm('Are you sure? This can not be undone!')) {
      productFactory.destroy({id: product_id}).$promise.then(function(){
        for ( var i = 0; i < ctrl.products.length ; i++) {
          if(ctrl.products[i].id === product_id){
            delete ctrl.products[i];
          };
        };
      })
    }
  }

  $scope.$on('newProduct', function (emitEvent, product) {
    ctrl.products.push(product);
  });

};

angular
  .module('app')
  .controller('Admin', Admin);
