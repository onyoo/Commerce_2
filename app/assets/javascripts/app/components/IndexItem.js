var IndexItem = {
  template: [
    '<p>',
    '<img ng-src="{{indexItem.product.image_url}}" alt="{{indexItem.product.name}} image">',
      '<a ui-sref="home.product({name: indexItem.product.name, id: indexItem.product.id})">',
      '{{indexItem.product.name}}',
      '</a>',
    '</p>',
    '<p>{{indexItem.product.price | currency}}</p>',
    '<p>Only {{indexItem.product.inventory}} left!</p><br/>',
    '<add-to-cart product="indexItem.product"></add-to-cart>'
  ].join(''),
  bindings: {
    product: '='
  },
  controller: function() {
    var ctrl = this;
  },
  controllerAs: 'indexItem'
}

angular
  .module('app')
  .component('indexItem', IndexItem);
