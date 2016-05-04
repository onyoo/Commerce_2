var AddToCart = {
  templateUrl: 'app/templates/addToCart.html',
  bindings: {
    product: '='
  },
  controller: function($state, $scope, Cart) {
    var ctrl = this;

    ctrl.carts = Cart.query();

    ctrl.add = function(cart) {
      cart.product = ctrl.product;
      cart.$update({id: cart.id}).then(function(resp) {
        ctrl.product.inventory--;
        ctrl.active = false;
        $scope.chooseCart = false;
      });
    };
  },
  controllerAs: 'addToCart'
};

angular
  .module('app')
  .component('addToCart', AddToCart);
