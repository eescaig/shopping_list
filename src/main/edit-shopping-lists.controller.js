(function () {

angular.module('mainShoppingList')
.controller('EditShoppingListController', EditShoppingListController);

EditShoppingListController.$inject = ['ShoppingListService'];
function EditShoppingListController(ShoppingListService) {
  var editSpList = this;
  editSpList.itemsList;
  editSpList.error = "";
  editSpList.styleText = "";
  editSpList.styleInput = "";

  // Guarda el elemento en la lista y recupera el listado
  editSpList.saveItem = function() {

    var promise = ShoppingListService.addItem(editSpList.itemList, editSpList.itemAmount);
    editSpList.itemInsert = null;
    editSpList.styleInput = "has-success";

    promise.
    then(function (response) {
      editSpList.itemInsert = response.data;
      console.log("Inserted item: "+ editSpList.itemInsert.name + " " + editSpList.itemInsert.amount);
      return ShoppingListService.getItems();
    })
    .then(function (response) {
      editSpList.itemsList = response.data;
      editSpList.clearFields();
    })
    .catch(function (errorResponse) {
      editSpList.error = errorResponse.message;
      editSpList.styleText = "text-danger";
      editSpList.styleInput = "has-error";
      console.log(errorResponse.message);
    })
  }

  editSpList.removeItem = function (id) {
     var promise = ShoppingListService.removeItem(id);
     editSpList.ItemRemoved = false;
     promise.
     then(function (response) {
       editSpList.ItemRemoved = response.data;
       console.log("editSpList.ItemRemoved: "+ editSpList.ItemRemoved);
       if(editSpList.ItemRemoved) {
         return ShoppingListService.getItems();
       }
     })
     .then(function (response) {
       editSpList.itemsList = response.data;
     })
     .catch(function (errorResponse) {
       editSpList.error = "One error has happend while try delete elements";
     })
  }

  editSpList.clearFields = function () {
    editSpList.error = "";
    editSpList.styleText = "";
    editSpList.styleInput = "";
    editSpList.itemList = "";
    editSpList.itemAmount = "";
  }

}

})();
