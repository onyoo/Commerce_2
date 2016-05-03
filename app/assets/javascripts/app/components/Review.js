
var ReviewComponent = {
  templateUrl: 'app/templates/review.html',
  bindings: {
    review: '='
  },
  controller: function(reviewFactory) {
    var ctrl = this;
    ctrl.upvote = function() {
      reviewFactory.patch({id: ctrl.review.id, useful: 'ture'}, function(resp) {
        ctrl.review.helpful_score = resp.helpful_score;
      });
    }
  },
  controllerAs: 'review'
};

angular
  .module('app')
  .component('reviewComponent', ReviewComponent);
