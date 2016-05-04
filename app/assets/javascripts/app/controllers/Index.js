
function Index(productFactory) {
  var ctrl = this;

  ctrl.products = productFactory.query();

};

angular
.module('app')
.controller('Index', Index);
