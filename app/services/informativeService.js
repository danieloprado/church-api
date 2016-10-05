((angular) => {
  'use strict';

  angular.module('app')
    .factory('informativeService', [
      'API',
      '$http',
      '$mdDialog',
      'dateHelper',
      InformativeService
    ]);

  function InformativeService(API, $http, $mdDialog, dateHelper) {

    const list = () => {
      return $http.get(`${API}/informative`).then((response) => {
        return response.data.map((item) => dateHelper.parseObj(item));
      });
    };

    const get = (id) => {
      return $http.get(`${API}/informative/${id}`).then(res => dateHelper.parseObj(res.data));
    };

    const save = (model) => {
      return $http.post(`${API}/informative`, model).then((response) => dateHelper.parseObj(response.data));
    };

    const remove = (id) => {
      return $http.delete(`${API}/informative/${id}`);
    };

    return {
      list,
      get,
      save,
      remove
    };
  }

})(angular);
