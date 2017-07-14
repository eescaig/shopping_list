(function () {
'use strict';

angular.module('mainShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // *** Set up UI states ***
  $stateProvider
  .state('main', {
    absract: true,
    templateUrl: 'src/main/templates/home.html'
  })
  // Premade list page -- categoriesList
  .state('main.shoppinglist', {
    url: '/',
    templateUrl: 'src/main/templates/shopping-list.template.html',
    controller: "ShoppingListController as shoppingList"
  })
//categoriesList.
  // .state('itemDetail', {
  //   url: '/item-detail/{categoryShortName}',
  //   templateUrl: 'src/menuapp/templates/itemdetails.template.html',
  //   controller: "ItemDetailsController as itemDetail",
  //   resolve: {
  //     item: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
  //       return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  //     }]
  //   }
  // });
}

})();
