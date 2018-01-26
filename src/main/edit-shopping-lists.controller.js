(function () {

angular.module('mainShoppingList')
.controller('EditShoppingListController', EditShoppingListController);

EditShoppingListController.$inject = ['ShoppingItemService', 'ShoppingListService'];
function EditShoppingListController(ShoppingItemService, ShoppingListService) {
  var editShoppingList = this;
  editShoppingList.itemsSelect = [];
  editShoppingList.itemAmount = "";
  editShoppingList.shoppingList = [];
  editShoppingList.existItemInList = false;
  editShoppingList.nameList = "";
  editShoppingList.error = "";
  editShoppingList.styleText = "";
  editShoppingList.styleInput = "";

  // Load items from service
  editShoppingList.loadItemList = function() {
    var promise = ShoppingItemService.getItems();
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
  editShoppingList.addItemInShoppingList = function(addItem, amount) {
     var itemList = {
       item: {name: addItem},
       amount: amount
     };
     editShoppingList.existItemInList = editShoppingList.containsObject(addItem, editShoppingList.shoppingList);
     if(addItem!=undefined && amount!="") {
         if(!editShoppingList.existItemInList) {
           editShoppingList.shoppingList.push(itemList);
           //$window.localStorage.setItem('shoppingList', item);
           console.log(editShoppingList.shoppingList);
         }
         else {
           editShoppingList.error = "El elemento que intenta insertar ya está en la lista";
           editShoppingList.styleText = "text-danger";
         }
     }
  }

  editShoppingList.saveShoppingList = function(nameList, shoppingList) {
    var responseShoppingList = [];
    if(nameList!==undefined && nameList!=="") {
      var promise = ShoppingListService.addShoppingList(nameList, shoppingList);

      promise.
      then(function (response) {
        responseShoppingList = response.data;
        console.log("Inserted list: "+ responseShoppingList.nameList + " " + responseShoppingList.list);
      })
      .catch(function (errorResponse) {
        console.log(errorResponse);
        console.log(errorResponse.status);
        if(errorResponse.status==400) {
          editItems.error = "Existe una lista con el nombre " + nameList;
        }
        editItems.styleText = "text-danger";
        editItems.styleInput = "has-error";
      })
    }
  }

  editShoppingList.containsObject = function(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      console.log(list[i].name + " Obj: " + obj);
        if (list[i].item.name === obj) {
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
