angular
  .module('app')
  .controller('Product', Product);

function Product(ProductService) {
  var ctrl = this;

  ctrl.products = ProductService.query();

};
