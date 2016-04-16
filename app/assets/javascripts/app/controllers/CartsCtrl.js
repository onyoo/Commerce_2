angular
  .module('app')
  .controller('CartsCtrl', CartsCtrl);

function CartsCtrl(Cart, $cookies) {
  var ctrl = this;

  ctrl.carts = Cart.query({user_id: $cookies.get('user_id')});

};
