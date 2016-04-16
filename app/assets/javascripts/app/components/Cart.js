
var Cart = {
  templateUrl: 'app/templates/cart.html',
  bindings: {
    cart: '='
  },
  controller: function(Cart) {

    var ctrl = this;

    this.content = Cart.query({id: ctrl.cart.id}).$promise.then(function(resp) {
      ctrl.products = resp[0];
      ctrl.lineItems = resp[1];
    });

  },
  controllerAs: 'cart'
}



angular
.module('app')
.component('cart', Cart);
