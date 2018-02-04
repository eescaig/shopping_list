(function () {
'use strict';

angular.module('DataApp')
.service('ShoppingItemService', ShoppingItemService)
.constant('ApiBasePath', "https://shopping-app-backend.herokuapp.com/api/shopItem");


ShoppingItemService.$inject = ['$q','$http', 'ApiBasePath'];
function ShoppingItemService($q, $http, ApiBasePath) {
  var service = this;

  // Method to set an item to shoppingList
  service.addItem = function (itemName) {
    var deferred = $q.defer();
    var errorMessage = {
      message: ""
    };

    if(itemName!==undefined) {
      var response = $http({
        method: "POST",
        url: ApiBasePath,
        headers: {
          'Content-Type': "application/json;charset=UTF-8"
        },
        data: { name: itemName}
      });
      deferred.resolve(response);
    }
    else {
      errorMessage.message = "Please, fill the field 'Item' !!!!";
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

  service.removeItem = function (name) {
    var response = $http({
      method: "DELETE",
      url: ApiBasePath + "/" + name
    });
    return response;
  };
}

})();
