((angular) => {
  'use strict';

  angular.module('appInformative').controller('appInformative.formCtrl', [
    '$routeParams',
    '$location',
    'UI',
    'dateHelper',
    'informativeService',
    FormCtrl
  ]);

  function FormCtrl($routeParams, $location, UI, dateHelper, informativeService) {
    this.model = {};
    this.types = [];
    this.editing = $routeParams.id;

    UI.Loader(informativeService.types()).then(types => {
      this.types = types;
    });

    if ($routeParams.id) {
      UI.Loader(informativeService.get($routeParams.id)).then(informative => {
        this.model = informative;
        this.model.time = dateHelper.getTime(informative.date);
      });
    }

    this.getFullMarkdown = () => {
      let title = this.model.title ? '# ' + this.model.title : '';
      return `${title}\n\n\n${this.model.message || ''}`;
    };

    this.submit = () => {
      this.model.date = dateHelper.merge(this.model.date, this.model.time);

      UI.Loader(informativeService.save(this.model)).then(() => {
        UI.Toast('Salvo');
        $location.path('/informativos');
      });
    };

  }

})(angular);
