(function () {
'use strict';

angular.module('DataApp')
.service('ShoppingListService', ShoppingListService)
.constant('ApiBasePathList', "https://shopping-app-backend.herokuapp.com/api/shoppingList");


ShoppingListService.$inject = ['$q','$http', 'ApiBasePathList'];
function ShoppingListService($q, $http, ApiBasePathList) {
  var service = this;

  // Method to set an item to shoppingList
  service.addShoppingList = function (nameList, shoppingList) {
    var deferred = $q.defer();
    var errorMessage = {
      message: ""
    };
    console.log("Name List: "+nameList + " Lista: "+shoppingList);
    // if(nameList!==undefined && nameList!=="") {
      var response = $http({
        method: "POST",
        url: ApiBasePathList,
        headers: {
          'Content-Type': "application/json;charset=UTF-8"
        },
        data: {
          nameList: nameList,
          list: shoppingList
        }
      });
      deferred.resolve(response);

    return deferred.promise;
  };

  // Method to get the item's shoppingList
  service.getShoppingList = function () {
    var response = $http({
      method: "GET",
      url: ApiBasePathList
    });
    return response;
  };

  service.removeShoppingList = function (nameList) {
    var response = $http({
      method: "DELETE",
      url: ApiBasePathList + "/" + nameList
    });
    return response;
  };
}

})();
