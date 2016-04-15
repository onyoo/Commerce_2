angular
  .module('app')
  .controller('Product', Product);

function Product(ProductService, $stateParams) {
  var ctrl = this;

  ctrl.product = ProductService.get({name: $stateParams.name, id: $stateParams.id});

};
