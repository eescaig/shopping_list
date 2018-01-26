(function () {

angular.module('mainShoppingList')
.controller('EditItemsController', EditItemsController);

EditItemsController.$inject = ['ShoppingItemService'];
function EditItemsController(ShoppingItemService) {
  var editItems = this;
  editItems.error = "";
  editItems.styleText = "";
  editItems.styleInput = "";

  // Get items list
  editItems.loadItemList = function() {
    var promise = ShoppingItemService.getItems();

    promise.
    then(function (response) {
      editItems.itemsList = response.data;
    })
    .catch(function (errorResponse) {
      editItems.error = errorResponse.message;
      editItems.styleText = "text-danger";
      editItems.styleInput = "has-error";
    })
  }

  editItems.loadItemList();

  // Save item to list
  editItems.saveItem = function() {
    var promise = ShoppingItemService.addItem(editItems.itemList);
    editItems.itemInsert = null;
    editItems.styleInput = "has-success";

    promise.
    then(function (response) {
      editItems.itemInsert = response.data;
      console.log("Inserted item: "+ editItems.itemInsert.name);
      return editItems.loadItemList();
    })
    .then(function (response) {
      editItems.clearFields();
    })
    .catch(function (errorResponse) {
      console.log(errorResponse);
      console.log(errorResponse.status);
      if(errorResponse.status==400) {
        editItems.error = "El elemento que intenta insertar ya existe";
      }
      editItems.styleText = "text-danger";
      editItems.styleInput = "has-error";

    })
  }

  // Delete item to list
  editItems.removeItem = function (name) {
     var promise = ShoppingItemService.removeItem(name);
     promise.
     then(function (response) {
       console.log("Remove element " + response.toString());
       return editItems.loadItemList();
     })
     .then(function (response) {
       editItems.clearFields();
     })
     .catch(function (errorResponse) {
       editItems.error = "One error has happend while try delete element";
     })
  }

  editItems.clearFields = function () {
    editItems.error = "";
    editItems.styleText = "";
    editItems.styleInput = "";
    editItems.itemList = "";
  }

}

})();
