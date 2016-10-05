((angular) => {
  'use strict';

  angular.module('appChurch')
    .controller('appChurch.editCtrl', [
      'Loader',
      'Toast',
      'churchService',
      EditCtrl
    ]);

  function EditCtrl(loader, toast, service) {
    this.model = {};

    loader(service.current()).then((church) => {
      this.model = church;
      this.location = {
        address: church.address,
        lat: church.latitude,
        lng: church.longitude
      };
    });

    this.submit = () => {
      this.model.address = this.location.address;
      this.model.latitude = this.location.lat;
      this.model.longitude = this.location.lng;

      console.log(this.model);

      loader(service.save(this.model)).then(() => {
        toast('Informações atualizadas');
      });
    };

  }

})(angular);
