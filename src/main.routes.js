(function () {
'use strict';

angular.module('home')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'src/main/templates/home.html',
    controller: "HomeController as $ctrl"
  })
  // Shopping lists Nav 1
  .state('main.shoppinglists', {
    url: 'shoppinglists',
    templateUrl: 'src/main/templates/shopping-lists.template.html',
    controller: "ShoppingListsController as shoppingList"
  })
  // Edit Shopping lists Nav 2
  .state('main.edit', {
    url: 'editsplists',
    templateUrl: 'src/main/templates/edit-shopping-lists.template.html',
    controller: "EditShoppingListController as editShoppingList"
  })
  // Edit Items Nav 3
  .state('main.items', {
    url: 'edititems',
    templateUrl: 'src/main/templates/edit-items.template.html',
    controller: "EditItemsController as editItems"
  })
}

})();
