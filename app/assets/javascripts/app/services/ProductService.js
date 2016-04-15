angular
  .module('app')
  .factory('ProductService', ProductService);

function ProductService($resource) {

  var host = 'http://localhost:3000/api/v1'

  var product = $resource(host + '/products/:id',{id: '@product'}, {
            query: {method: 'GET', isArray: true},
            create: {method: 'POST'}
          });

  return product;

};
