var ChangeQuantity = {
  template: [
    "<form  ng-submit='changeQ.edit(changeQ.product, changeQ.quantity); changeQ.product.show=false;changeQ.cart.active=false '>", // ng-show='changeQ.product.show'
      "Quantity: ",
      "<input type='number' ng-model='changeQ.quantity' value='{{changeQ.product.quantity}}' min='0' max='{{changeQ.product.inventory}}'><br>",
      "<input type='submit' value='Update' class='point_5_margin'>",
    "</form>"
  ].join(''),
  bindings: {
    product: '=',
    cart: '='
  },
  controller: function($scope) {
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
        if(lineItems){    // cart view
          for(i in lineItems) {
            if(lineItems[i].product_id === product.id) {
              lineItems[i].quantity = quantity;
            };
          };
          quantity = 0;
        }else{           // index views
          product.inventory -= quantity;
        }
        $scope.$parent.$parent.chooseCart = false;
      });
    };
  },
  controllerAs: 'changeQ'
}

angular
  .module('app')
  .component('changeQuantity', ChangeQuantity)
