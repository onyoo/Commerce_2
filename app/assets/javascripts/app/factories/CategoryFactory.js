
function CategoryFactory($resource) {

  var host = 'http://localhost:3000/api/v1';

  var category = $resource(host + '/categories/:id',{id: '@product'}, {
            query: {method: 'GET',
                    isArray: true,
                    transformResponse: function(data, header){
                      return JSON.parse(data).categories;
                    }
                  },
            create: {method: 'POST'},
            destroy: {method: 'DELETE'}
          });

  return category;

};


angular
.module('app')
.factory('categoryFactory', CategoryFactory);
