(function(angular) {
  'use strict';

  angular.module('app').factory('dateHelper', [
    'moment',
    DateHelper
  ]);

  function DateHelper(moment) {

    function merge(date, hour) {
      if (hour) {
        const parts = hour.split(':');

        date.setHours(parts[0]);
        date.setMinutes(parts[1]);
      }

      return date;
    }

    function parseObj(obj, fields) {
      if (!fields) {
        fields = Object.keys(obj).filter(x => x.toLowerCase().indexOf('date') > -1);
      }

      fields.forEach(key => {
        if (!obj[key]) return;
        obj[key] = new Date(obj[key]);
      });

      return obj;
    }

    function getTime(date) {
      return moment(date.beginDate).format('HH:mm')
    }

    return { merge, parseObj, getTime };

  }

})(angular);
