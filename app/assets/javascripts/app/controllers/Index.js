angular
  .module('app')
  .controller('Index', Index);

function Index(productFactory) {
  var ctrl = this;

  ctrl.products = productFactory.query();

};
