function CartQuantity() {
  return function(products, lineitems) {

    var cart = {}

    for ( var i in products ) {
      var product = products[i];
      var lineitem = lineitems[i];
      if ( products.id === lineitems.product_id ) {
        product['quantity'] = lineitem.quantity
        cart[product.id] = product;
      };
    };

    return cart
  };
};

angular
  .module('app')
  .filter('cartQuantity', CartQuantity)
