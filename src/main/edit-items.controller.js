(function () {

angular.module('mainShoppingList')
.controller('EditItemsController', EditItemsController);

EditItemsController.$inject = ['ShoppingListService'];
function EditItemsController(ShoppingListService) {
  var editItems = this;
  editItems.itemsList;
  editItems.error = "";
  editItems.styleText = "";
  editItems.styleInput = "";

  // Save items to list
  editItems.saveItem = function() {

    var promise = ShoppingListService.addItem(editItems.itemList);
    editItems.itemInsert = null;
    editItems.styleInput = "has-success";

    promise.
    then(function (response) {
      editItems.itemInsert = response.data;
      console.log("Inserted item: "+ editItems.itemInsert.name);
      return ShoppingListService.getItems();
    })
    .then(function (response) {
      editItems.itemsList = response.data;
      editItems.clearFields();
    })
    .catch(function (errorResponse) {
      editItems.error = errorResponse.message;
      editItems.styleText = "text-danger";
      editItems.styleInput = "has-error";
      console.log(errorResponse.message);
    })
  }

  editItems.removeItem = function (id) {
     var promise = ShoppingListService.removeItem(id);
     editItems.ItemRemoved = false;
     promise.
     then(function (response) {
       editItems.ItemRemoved = response.data;
       console.log("editItems.ItemRemoved: "+ editItems.ItemRemoved);
       if(editItems.ItemRemoved) {
         return ShoppingListService.getItems();
       }
     })
     .then(function (response) {
       editItems.itemsList = response.data;
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
    editItems.itemAmount = "";
  }

}

})();
