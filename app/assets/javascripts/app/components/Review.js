
var ReviewComponent = {
  templateUrl: 'app/templates/review.html',
  bindings: {
    review: '='
  },
  controller: function() {
    var ctrl = this;

  },
  controllerAs: 'review'
};

angular
  .module('app')
  .component('reviewComponent', ReviewComponent);
