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
      if (ctrl.cart.lineItems !== undefined) {  // cart
        ctrl.sendUpdate( quantity, product, ctrl.cart.cart, ctrl.cart.lineItems );
      }else{  // index views
        ctrl.sendUpdate( quantity, product, ctrl.cart );
      };
    };

    ctrl.sendUpdate = function(quantity, product, kart, lineItems) {
      kart.$update({id: kart.id, 'product_id': product.id, 'quantity': quantity}).then(function() {
        if(lineItems){    // should be cart
          for(i in lineItems) {
            if(lineItems[i].product_id === product.id) {
              lineItems[i].quantity = quantity;
            };
          };
          quantity = 0;
        }else{           // should be index views
          product.inventory -= quantity;
        }
      });
    };
  },
  controllerAs: 'changeQ'
}

angular
  .module('app')
  .component('changeQuantity', ChangeQuantity)
