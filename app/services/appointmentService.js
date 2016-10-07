((angular) => {
  'use strict';

  angular.module('app').factory('appointmentService', [
    'API',
    '$http',
    'dateHelper',
    AppointmentService
  ]);

  function AppointmentService(API, $http, dateHelper) {
    const list = () => {
      return $http.get(`${API}/appointment`).then(response => response.data.map(item => dateHelper.parseObj(item)));
    };

    const find = (id) => {
      return $http.get(`${API}/appointment/${id}`).then(response => dateHelper.parseObj(response.data));
    };

    const save = (model) => {
      return $http.post(`${API}/appointment`, model).then(response => dateHelper.parseObj(response.data));
    };

    const remove = (id) => {
      return $http.delete(`${API}/appointment/${id}`);
    };

    return { list, find, save, remove };
  }

})(angular);
