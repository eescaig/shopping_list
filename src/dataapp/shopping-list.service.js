(function () {
'use strict';

angular.module('DataApp')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$window'];
function ShoppingListService($window) {
  var service = this;

  // Object login user
  var itemsList = [];

  service.addItem = function (itemName, amount) {
    var item = {
      itemName: itemName,
      amount: amount
    };

    itemsList.push(item);
    //$window.localStorage.setItem('shoppingList', item);
  };

  service.getItems = function () {
    return itemsList;
    //return $window.localStorage.getItem('shoppingList');
  };

}

})();
