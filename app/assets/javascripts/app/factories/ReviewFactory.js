function ReviewFactory($resource) {

  var host = 'http://localhost:3000/api/v1';

  var review = $resource(host+ '/reviews/:id',{id: '@id'}, {
              query: {method: 'GET', isArray: false},
              create: {method: 'POST'},
              patch: {method: 'PATCH'},
              destroy: {method: 'DELETE'}
            });

  return review;

};

angular
  .module('app')
  .factory('reviewFactory', ReviewFactory)
