((angular) => {
  'use strict';

  angular.module('appChurch')
    .controller('church.editCtrl', [
      '$scope',
      'uiGmapGoogleMapApi',
      'Loader',
      'Toast',
      'churchService',
      EditCtrl
    ]);

  function EditCtrl($scope, uiGmapGoogleMapApi, loader, toast, service) {
    $scope.$emit('change-page-title', 'Igreja');
    $scope.model = {};

    loader(service.current())
      .then((church) => {
        $scope.model = church;
      });

    $scope.submit = () => {
      loader(service.save($scope.model))
        .then(() => {
          toast('Informações atualizadas');
        });
    };

  }

})(angular);
