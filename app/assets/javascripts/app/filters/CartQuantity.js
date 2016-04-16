function CartQuantity() {
  return function(products, lineitems, controller) {

    var cart = {};
    controller.runningTotal = 0;

    for ( var i in products ) {
      var product = products[i];
      var lineitem = lineitems[i];
      if ( (product.id != undefined) && (product.id === lineitem.product_id) ) {
        product['quantity'] = lineitem.quantity;
        product['total'] = product.quantity * product.price;
        controller.runningTotal += product.total;
        cart[product.id] = product;
      };
    };

    return cart;
  };
};

angular
  .module('app')
  .filter('cartQuantity', CartQuantity)
