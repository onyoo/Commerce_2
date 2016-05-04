
function Product(productFactory, $stateParams, $scope, reviewFactory) {
  var ctrl = this;

  productFactory.get({name: $stateParams.name, id: $stateParams.id}, function(resp) {
    ctrl.product = resp.product
  });


  ctrl.submitReview = function() {
    $scope.reviewForm.user_id = parseInt($scope.$parent.user.id);
    $scope.reviewForm.product_id = parseInt(ctrl.product.id);
    reviewFactory.create($scope.reviewForm, function(resp) {
      delete $scope.reviewForm;
      ctrl.product.reviews.push(resp.review);
    });
  }
};

angular
  .module('app')
  .controller('Product', Product);
