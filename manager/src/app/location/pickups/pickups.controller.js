(function() {
    'use strict';
    angular.module('bProject').controller('PickupsController', PickupsController);
    /** @ngInject */
    function PickupsController(toastr, PickupsService, $log) {
        var vm = this;
        PickupsService.GetAll().then(function(data) {
            vm.pickups = data;
            vm.loading = false;
        }, function(error) {
            $log.debug('error:' + error);
        });
    }
})();
