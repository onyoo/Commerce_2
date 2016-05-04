
function Index(productFactory) {
  var ctrl = this;

  productFactory.query({}, function(resp) { ctrl.products = resp.products; });

};

angular
.module('app')
.controller('Index', Index);
