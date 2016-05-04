
function CategoryFactory($resource) {

  var host = 'http://localhost:3000/api/v1';

  var product = $resource(host + '/categories/:id',{id: '@product'}, {
            query: {method: 'GET', isArray: false},
            create: {method: 'POST'},
            destroy: {method: 'DELETE'}
          });

  return product;

};


angular
.module('app')
.factory('categoryFactory', CategoryFactory);
