angular
  .module('app')
  .factory('productFactory', ProductFactory);

function ProductFactory($resource) {

  var host = 'http://localhost:3000/api/v1';

  var product = $resource(host + '/products/:id',{id: '@id'}, {
            query: {method: 'GET', isArray: true},
            patch: {method: 'PATCH'},
            create: {method: 'POST'}
          });

  return product;

};
