var ProductItem = {
  template: [
    '<p>',
      '<a ui-sref="home.product({name: productItem.product.name, id: productItem.product.id})">',
      '{{productItem.product.name}}',
      '</a>',
    '</p>',
    '<p>{{productItem.product.price | currency}}</p>',
    '<p>Only {{productItem.product.inventory}} left!</p><br/>'
  ].join(''),
  bindings: {
    product: '='
  },
  controller: function() {
    var ctrl = this;
  },
  controllerAs: 'productItem'
}

angular
  .module('app')
  .component('productItem', ProductItem);
