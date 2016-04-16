angular
  .module('app')
  .controller('CartsCtrl', CartsCtrl);

function CartsCtrl(Cart) {
  var ctrl = this;

  ctrl.carts = Cart.query();

};
