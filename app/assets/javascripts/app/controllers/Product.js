
function Product(productFactory, $stateParams) {
  var ctrl = this;

  ctrl.product = productFactory.get({name: $stateParams.name, id: $stateParams.id});

};

angular
  .module('app')
  .controller('Product', Product);
