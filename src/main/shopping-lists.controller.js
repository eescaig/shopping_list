(function () {
'use strict';

angular.module('mainShoppingList')
.controller('ShoppingListsController', ShoppingListsController);

ShoppingListsController.$inject = ['ShoppingListService'];
function ShoppingListsController(ShoppingListService) {
  var shoppingList = this;
  shoppingList.allMyShoppingList = [];
  shoppingList.error = "";
  shoppingList.styleText = "";
  shoppingList.styleInput = "";

  shoppingList.obtainShoppingLists = function () {
    var promise = ShoppingListService.getShoppingList();

    promise.
    then(function (response) {
      shoppingList.allMyShoppingList = response.data
      // .map(current => {
      //   console.log(current);
      //   let eachList = {"nameList"  : current.nameList,
      //                   "itemsList" : current.list.map(elem => {
      //                                   let items = {"name" : elem.item.name, "amount" : elem.amount};
      //                                   return items;
      //                                 })
      //                  };
      //     return eachList;
      // });
      console.log("listado todas shoppingList: " + JSON.stringify(shoppingList.allMyShoppingList));
    })
    .catch(function (errorResponse) {
      shoppingList.error = errorResponse.message;
      shoppingList.styleText = "text-danger";
      shoppingList.styleInput = "has-error";
    })
  }

  shoppingList.obtainShoppingLists();

  shoppingList.removeShoppingList = function (nameList) {
     var promise = ShoppingListService.removeShoppingList(nameList);

     promise.
     then(function (response) {
       return shoppingList.obtainShoppingLists();
     })
     .catch(function (errorResponse) {
       shoppingList.error = "One error has happend while try delete shoppingList";
     })
  }

  shoppingList.clearFields = function () {
    shoppingList.error = "";
    shoppingList.styleText = "";
    shoppingList.styleInput = "";
  }

}

})();
