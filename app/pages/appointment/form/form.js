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
      this.model.beginDate = dateHelper.merge(this.model.beginDate, this.model.beginTime);
      this.model.endDate = dateHelper.merge(this.model.endDate, this.model.endTime);

      UI.Loader(service.save(this.model)).then(() => {
        UI.Toast('Salvo');
        $location.path('/agenda');
      }).catch(UI.Toast.httpHandler);
    };

  }

})(angular);
