
function Product(productFactory, $stateParams, $scope, reviewFactory) {
  var ctrl = this;

  ctrl.product = productFactory.get({name: $stateParams.name, id: $stateParams.id});


  ctrl.submitReview = function() {
    $scope.reviewForm.user_id = parseInt($scope.$parent.user.id);
    $scope.reviewForm.product_id = parseInt(ctrl.product.id);
    reviewFactory.create($scope.reviewForm, function(resp) {
      delete $scope.reviewForm;
      ctrl.product.reviews.push(resp);
    });
  }
};

angular
  .module('app')
  .controller('Product', Product);
