angular
  .module('app')
  .controller('Product', Product);

function Product(ProductService, $stateParams, Upload) {
  var ctrl = this;

  ctrl.product = ProductService.get({name: $stateParams.name, id: $stateParams.id});

  ctrl.uploadImage = function(image, invalid, id) {
    Upload.upload({
      url: '/api/v1/products/' + ctrl.product.id,
      method: 'PATCH',
      data: { 'product_image': image }
    }).then(function(resp) {
      ctrl.product.image_url = resp.data.url;
    }, function(error) {
      console.log(error);
    });
  };

};
