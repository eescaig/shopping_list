(function () {
'use strict';

angular.module('home')
.controller('HomeController', HomeController);

HomeController.$inject = [];
function HomeController() {
  var $ctrl = this;
  $ctrl.currentNavItem = 'page1';
}

})();
