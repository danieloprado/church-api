(function(angular) {
  'use strict';

  angular.module('appAppointment')
    .config([
      '$routeProvider',
      Routes
    ]);

  function Routes($routeProvider) {
    $routeProvider
      .when('/agenda', {
        templateUrl: '/views/pages/appointment/list/list.html',
        controller: 'appAppointment.listCtrl',
        controllerAs: '$ctrl'
      }).when('/agenda/criar', {
        templateUrl: '/views/pages/appointment/form/form.html',
        controller: 'appAppointment.formCtrl',
        controllerAs: '$ctrl'
      }).when('/agenda/:id/editar', {
        templateUrl: '/views/pages/appointment/form/form.html',
        controller: 'appAppointment.formCtrl',
        controllerAs: '$ctrl'
      });
  }

})(angular);
