((angular) => {
  'use strict';

  angular.module('appChurch')
    .controller('appChurch.editCtrl', [
      '$scope',
      'uiGmapGoogleMapApi',
      'Loader',
      'Toast',
      'churchService',
      EditCtrl
    ]);

  function EditCtrl($scope, uiGmapGoogleMapApi, loader, toast, service) {
    $scope.model = {};

    loader(service.current()).then((church) => {
      $scope.model = church;
    });

    $scope.submit = () => {
      loader(service.save($scope.model)).then(() => {
        toast('Informações atualizadas');
      });
    };

  }

})(angular);
