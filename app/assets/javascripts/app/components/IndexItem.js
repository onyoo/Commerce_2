var IndexItem = {
  templateUrl: 'app/templates/indexItem.html',
  bindings: {
    product: '='
  },
  controllerAs: 'indexItem'
}

angular
  .module('app')
  .component('indexItem', IndexItem);
