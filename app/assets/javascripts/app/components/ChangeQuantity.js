var ChangeQuantity = {
  template: [
    "<button ng-show='!changeQ.product.show' ng-init='changeQ.product.show = false'",
            "ng-click='changeQ.product.show = true'>Change Quantity</button>",
    "<form ng-show='changeQ.product.show' ng-submit='changeQ.edit(changeQ.product, changeQ.quantity); changeQ.product.show=false'>",
      "How many would you like?",
      "<input type='number' ng-model='changeQ.quantity'>",
      "<input type='submit'>",
    "</form>"
  ].join(''),
  bindings: {
    product: '=',
    cart: '='
  },
  controller: function() {
    var ctrl = this;

    ctrl.edit = function(product, quantity) {
      debugger;
      var cart = (ctrl.cart.cart || ctrl.cart )
      cart.$update({id: cart.id, 'product_id': product.id, 'quantity': quantity}).then(function() {
        var items = cart.lineItems;
        for(i in items) {
          cart.lineItems[i].quantity = quantity;
        };
        ctrl.quantity = 0;
      });
    };

  },
  controllerAs: 'changeQ'
}

angular
  .module('app')
  .component('changeQuantity', ChangeQuantity)
