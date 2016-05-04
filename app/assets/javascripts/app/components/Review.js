
var ReviewComponent = {
  templateUrl: 'app/templates/review.html',
  bindings: {
    review: '='
  },
  controller: function(reviewFactory, $scope) {
    var ctrl = this;
    ctrl.upvote = function() {
      $scope.upVote = {}
      $scope.upVote.user_id = parseInt($scope.$parent.user.id);
      $scope.upVote.product_id = parseInt(ctrl.product_id);
      $scope.upVote.useful = 'true'
      reviewFactory.patch({id: ctrl.review.id, review: $scope.upVote}, function(resp) {
        ctrl.review.likers = resp.review.likers;
      });
    }
  },
  controllerAs: 'review'
};

angular
  .module('app')
  .component('reviewComponent', ReviewComponent);
