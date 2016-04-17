var NewCart = {
  template: "<button ng-click='newCart.new()' class='btn' id='new_cart_btn'>New Cart</button>", // ng-show='!cart.cOMessage'
  bindings: {
    controller: '='
  },
  controller: function(Cart) {
    var ctrl = this;

    ctrl.cart = new Cart();

    ctrl.new = function() {
      ctrl.cart.$save().then(function(resp) {
        ctrl.controller.carts.push(resp);
      });
    };

  },
  controllerAs: 'newCart'
};

angular
  .module('app')
  .component('newCart', NewCart);
