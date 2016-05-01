
var Cart = {
  templateUrl: 'app/templates/cart.html',
  bindings: {
    cart: '='
  },
  controller: function(Cart) {

    var ctrl = this;

    ctrl.content = Cart.query({id: ctrl.cart.id}).$promise.then(function(resp) {
      ctrl.products = resp[0];
      ctrl.lineItems = resp[1];
    });

    ctrl.remove = function(id) {
      ctrl.cart.$update({'id': ctrl.cart.id, remove_id: id}).then(function() {
        for(var i in ctrl.products) {
          var product = ctrl.products[i];
          if(product.id == id) {
            delete ctrl.products[i];
          };
        };
      });
    };

  },
  controllerAs: 'cart'
}



angular
  .module('app')
  .component('cart', Cart);
