angular
  .module('app')
  .factory('Cart', Cart);

function Cart($resource) {

  var host = 'http://localhost:3000/api/v1'

  var cart = $resource(host + '/carts/:id',{id: '@cart'}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' },
            update: { method: 'PUT' },
            delete: { method: 'DELETE' }
          });

  return cart;

};
