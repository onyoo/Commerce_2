var IndexItem = {
  templateUrl: 'app/templates/indexItem.html',
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
