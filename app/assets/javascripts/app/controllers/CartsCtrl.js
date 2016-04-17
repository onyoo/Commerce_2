angular
  .module('app')
  .controller('CartsCtrl', CartsCtrl);

function CartsCtrl(Cart) {
  var ctrl = this;

  ctrl.carts = Cart.query();

  ctrl.delete = function(id) {
    for(var i in ctrl.carts) {
      var cart = ctrl.carts[i];
      if(cart.id === id) {
        var index = i;
        cart.$delete({'id': id}).then(function() {
          ctrl.carts.splice(index,1);
        });
      };
    };
  };
};
