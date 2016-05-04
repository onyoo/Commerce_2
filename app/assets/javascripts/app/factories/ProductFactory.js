
function ProductFactory($resource) {

  var host = 'http://localhost:3000/api/v1';

  var product = $resource(host + '/products/:id',{id: '@id'}, {
            query: {method: 'GET',
                    isArray: true,
                    transformResponse: function(data, header){
                      return JSON.parse(data).products;
                    }},
            patch: {method: 'PATCH',
                      transformResponse: function(data, header){
                      return JSON.parse(data).product;
                    }},
            create: {method: 'POST',
                      transformResponse: function(data, header){
                      return JSON.parse(data).product;
                    }},
            destroy: {method: 'DELETE'}
          });

  return product;

};


angular
.module('app')
.factory('productFactory', ProductFactory);
