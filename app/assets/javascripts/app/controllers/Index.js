angular
  .module('app')
  .controller('Index', Index);

function Index(ProductService) {
  var ctrl = this;

  ctrl.products = ProductService.query();

};
