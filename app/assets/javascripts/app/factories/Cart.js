
function Cart($resource) {

  var host = '/api/v1'

  var cart = $resource(host + '/carts/:id',{id: '@cart'}, {
            query: {method: 'GET',
                    isArray: true,
                    transformResponse: function(data, header){
                      return JSON.parse(data).carts;
                    }
                  },
            create: { method: 'POST' },
            update: { method: 'PUT' },
            delete: { method: 'DELETE' }
          });

  return cart;

};

angular
.module('app')
.factory('Cart', Cart);
