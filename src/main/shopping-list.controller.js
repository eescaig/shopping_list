(function () {

angular.module('mainShoppingList')
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var shoppingList = this;
  shoppingList.itemsList;

  shoppingList.saveItem = function() {
    ShoppingListService.addItem(shoppingList.itemList, shoppingList.itemAmount);
    
    shoppingList.itemsList = ShoppingListService.getItems();
  }

}

})();
