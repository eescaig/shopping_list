(function () {
'use strict';

angular.module('DataApp')
.service('ShoppingListService', ShoppingListService)
.constant('ApiBasePath', "http://localhost:8080/shopItem");


ShoppingListService.$inject = ['$q','$http', 'ApiBasePath'];
function ShoppingListService($q, $http, ApiBasePath) {
  var service = this;

  // Method to set an item to shoppingList
  service.addItem = function (itemName, amount) {
    var deferred = $q.defer();
    var errorMessage = {
      message: ""
    };

    if(itemName!==undefined && amount!==undefined) {
      var response = $http({
        method: "POST",
        url: ApiBasePath,
        headers: {
          'Content-Type': "application/json;charset=UTF-8"
        },
        data: { name: itemName, amount: amount}
      });
      deferred.resolve(response);
    }
    else {
      errorMessage.message = "Please, fill the fields 'Item' and 'Amount' !!!!";
      deferred.reject(errorMessage);
    }
    return deferred.promise;
  };

  // Method to get the item's shoppingList
  service.getItems = function () {
    var response = $http({
      method: "GET",
      url: ApiBasePath
    });
    return response;
  };

  service.removeItem = function (id) {
    var response = $http({
      method: "DELETE",
      url: ApiBasePath + "/" + id
    });
    return response;
  };

}

})();
