var NewCart = {
  template: "<button ng-click='newCart.new()' ng-show='newCart.newCartOption' class='btn' id='new_cart_btn'>New Cart</button>", // ng-show='!cart.cOMessage'
  bindings: {
    controller: '='
  },
  controller: function(Cart, $scope, $state, Auth) {
    var ctrl = this;

    ctrl.newCartOption = true;
    ctrl.cart = new Cart();

    ctrl.user = Auth.currentUser()

    ctrl.new = function() {
      if(ctrl.user !== undefined) {
        ctrl.cart.$save().then(function(resp) {
          ctrl.controller.carts.push(resp);
          ctrl.newCartOption = false;
        });
      }else{
        $state.go('home.login');
      }
    };

  },
  controllerAs: 'newCart'
};

angular
  .module('app')
  .component('newCart', NewCart);
