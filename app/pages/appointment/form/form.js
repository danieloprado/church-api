((angular) => {
  'use strict';

  angular.module('appAppointment').controller('appAppointment.formCtrl', [
    '$location',
    '$routeParams',
    'UI',
    'dateHelper',
    'appointmentService',
    FormCtrl
  ]);

  function FormCtrl($location, $routeParams, UI, dateHelper, service) {
    const model = this.model = {};
    this.editing = $routeParams.id;

    if ($routeParams.id) {
      UI.Loader(service.find($routeParams.id)).then(data => {
        angular.extend(model, data);

        model.beginTime = dateHelper.getTime(data.beginDate);
        model.endTime = dateHelper.getTime(data.endDate);
      });
    }



    this.submit = () => {
      var data = angular.copy(model);

      data.beginDate = dateHelper.merge(data.beginDate, data.beginTime);
      data.endDate = dateHelper.merge(data.endDate, data.endTime);

      UI.Loader(service.save(data)).then(() => {
        UI.Toast('Salvo');
        $location.path('/agenda');
      }).catch(UI.Toast.httpHandler);
    };

  }

})(angular);
