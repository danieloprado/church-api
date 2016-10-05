(function(angular) {
  'use strict';

  angular.module('appChurch')
    .config([
      '$routeProvider',
      Routes
    ]);

  function Routes($routeProvider) {
    $routeProvider
      .when('/church', {
        templateUrl: '/views/pages/church/edit/edit.html',
        controller: 'appChurch.editCtrl',
        controllerAs: '$ctrl'
      });
  }

})(angular);
