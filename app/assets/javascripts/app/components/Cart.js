
var Cart = {
  templateUrl: 'app/templates/cart.html',
  bindings: {
    cart: '='
  },
  controller: function(Cart) {

    var ctrl = this;

    this.content = Cart.query({id: ctrl.cart.id});
  },
  controllerAs: 'cart'
}



angular
.module('app')
.component('cart', Cart);
