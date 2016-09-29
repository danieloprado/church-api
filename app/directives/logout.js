(function(angular) {
  'use strict';

  angular.module('app').directive('appLogout', ['loginService', Logout]);

  function Logout(service) {

    return {
      restrict: 'A',
      scope: false,
      link: (scope, elem) => {
        angular.element(elem).on('click', function() {
          service.logout().then(() => service.openLogin());
        });
      }
    };

  }

})(angular);
