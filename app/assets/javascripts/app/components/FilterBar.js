var FilterBar = {
  templateUrl: 'app/templates/filterBar.html',
  bindings: {
    products: '=',
  }
}

angular
  .module('app')
  .component('filterBar', FilterBar);
