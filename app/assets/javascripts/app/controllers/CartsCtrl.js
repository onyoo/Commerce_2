
function CartsCtrl(Cart, $http) {
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

  ctrl.checkout = function(id) {
    var host = 'http://localhost:3000/api/v1'
    $http.post(host + '/carts/' + id + '/checkout').then(function() {
      for(var i in ctrl.carts) {
        if(ctrl.carts[i].id === id) {
          ctrl.carts.splice(i,1);
        };
      };
    });
  };

};

angular
  .module('app')
  .controller('CartsCtrl', CartsCtrl);
