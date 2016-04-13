angular
  .module('app')
  .service('ProductService', ProductService);

function ProductService($resource) {
  this.getProductsIndex = function() {
    debugger;
  }
};
