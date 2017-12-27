(function () {

angular.module('mainShoppingList')
.controller('EditShoppingListController', EditShoppingListController);

EditShoppingListController.$inject = ['ShoppingListService', '$window'];
function EditShoppingListController(ShoppingListService, $window) {
  var editShoppingList = this;
  editShoppingList.itemsSelect = [];
  editShoppingList.itemAmount = "";
  editShoppingList.shoppingList = [];
  editShoppingList.error = "";
  editShoppingList.styleText = "";
  editShoppingList.styleInput = "";

  // Load items from service
  editShoppingList.loadItemList = function() {
    var promise = ShoppingListService.getItems();
    promise.
    then(function (response) {
      var foundItems = response.data;
      angular.forEach(foundItems, function(value, key) {
        if (foundItems!==undefined) {
          editShoppingList.itemsSelect.push(value);
        }
      });
    })
    .catch(function (errorResponse) {
      editShoppingList.error = errorResponse.message;
      editShoppingList.styleInput = "has-error";
    })
  }

  editShoppingList.loadItemList();
  // Load items in combo
  editShoppingList.dataSelect = {
      singleSelect: null,
      availableOptions: editShoppingList.itemsSelect
   };


  // Add item to shoppingList
  editShoppingList.addItemInShoppingList = function(item, quantity) {
     var itemList = {
       name: item,
       quantity: quantity
     };
     if(item!=undefined && quantity!="" && !editShoppingList.containsObject(item, editShoppingList.shoppingList)) {
       editShoppingList.shoppingList.push(itemList);
       //$window.localStorage.setItem('shoppingList', item);
       console.log(editShoppingList.shoppingList);
     }
  }

  editShoppingList.containsObject = function(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      console.log(list[i].name + " Obj: " + obj);
        if (list[i].name === obj) {
            return true;
        }
    }

    return false;
 };

  editShoppingList.removeItem = function (index) {
     editShoppingList.shoppingList.splice(index, 1);
  }

  editShoppingList.isEmpty = function() {
    var isEmpty = true;
    if(editShoppingList.shoppingList.length > 0)
    isEmpty = false;
    return isEmpty;
  }

  editShoppingList.clearFields = function () {
    editShoppingList.error = "";
    editShoppingList.styleText = "";
    editShoppingList.styleInput = "";
    editShoppingList.itemAmount = "";
  }

}

})();
