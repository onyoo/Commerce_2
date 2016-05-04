function Category(categoryFactory, $stateParams) {

  var ctrl = this;

  categoryFactory.query({'id': $stateParams.id}, function(resp) {
    ctrl.products = resp.categories
  });

}

angular
  .module('app')
  .controller('Category', Category);
