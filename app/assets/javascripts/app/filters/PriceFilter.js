function PriceFilter() {
  return function(items, min, max) {
    var min = min;
    var max = max;

    var itemsInRange = [];

    for( var i in items ) {
      if( min <= items[i].price && items[i].price <= max ) {
        itemsInRange.push(items[i]);
      };
    };

    return itemsInRange;
  };
};

angular
  .module('app')
  .filter('priceFilter', PriceFilter);
