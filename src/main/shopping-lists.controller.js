(function () {

angular.module('mainShoppingList')
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var shoppingList = this;
  // shoppingList.itemsList;
  // shoppingList.error = "";
  // shoppingList.styleText = "";
  // shoppingList.styleInput = "";
  //
  // // Guarda el elemento en la lista y recupera el listado
  // shoppingList.saveItem = function() {
  //
  //   var promise = ShoppingListService.addItem(shoppingList.itemList, shoppingList.itemAmount);
  //   shoppingList.itemInsert = null;
  //   shoppingList.styleInput = "has-success";
  //
  //   promise.
  //   then(function (response) {
  //     shoppingList.itemInsert = response.data;
  //     console.log("Inserted item: "+ shoppingList.itemInsert.name + " " + shoppingList.itemInsert.amount);
  //     return ShoppingListService.getItems();
  //   })
  //   .then(function (response) {
  //     shoppingList.itemsList = response.data;
  //     shoppingList.clearFields();
  //   })
  //   .catch(function (errorResponse) {
  //     shoppingList.error = errorResponse.message;
  //     shoppingList.styleText = "text-danger";
  //     shoppingList.styleInput = "has-error";
  //     console.log(errorResponse.message);
  //   })
  // }
  //
  // shoppingList.removeItem = function (id) {
  //    var promise = ShoppingListService.removeItem(id);
  //    shoppingList.ItemRemoved = false;
  //    promise.
  //    then(function (response) {
  //      shoppingList.ItemRemoved = response.data;
  //      console.log("shoppingList.ItemRemoved: "+ shoppingList.ItemRemoved);
  //      if(shoppingList.ItemRemoved) {
  //        return ShoppingListService.getItems();
  //      }
  //    })
  //    .then(function (response) {
  //      shoppingList.itemsList = response.data;
  //    })
  //    .catch(function (errorResponse) {
  //      shoppingList.error = "One error has happend while try delete elements";
  //    })
  // }
  //
  // shoppingList.clearFields = function () {
  //   shoppingList.error = "";
  //   shoppingList.styleText = "";
  //   shoppingList.styleInput = "";
  //   shoppingList.itemList = "";
  //   shoppingList.itemAmount = "";
  // }

}

})();
