(function(angular) {
  'use strict';

  angular.module('appAppointment').controller('appAppointment.listCtrl', [
    'UI',
    'appointmentService',
    ListCtrl
  ]);

  function ListCtrl(UI, service) {
    this.query = { order: 'name' };

    this.dataPromise = service.list().then(data => {
      this.appointments = data;
    });

    this.delete = ($event, appointment) => {
      UI.Confirm(`Deseja apagar o evento **${appointment.title}**`, $event).then(() => {
        const index = this.appointments.indexOf(appointment);
        this.appointments.splice(index, 1);

        return service.remove(appointment.id);
      }).catch(error => {
        if (error.isConfirm) return;

        this.appointments.push(appointment);
        UI.Toast(`Não foi possível apagar o evento **${appointment.title}**`);
      });
    };
  }

})(angular);
