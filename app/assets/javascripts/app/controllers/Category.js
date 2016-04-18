function Category(categoryFactory, $stateParams) {

  var ctrl = this;

  ctrl.products = categoryFactory.query({'id': $stateParams.id});

}

angular
  .module('app')
  .controller('Category', Category);
