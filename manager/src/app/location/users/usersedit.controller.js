(function() {
    'use strict';
    angular.module('bProject').controller('UsersEditController', UsersEditController);

    function UsersEditController(toastr, UsersService, $log, $stateParams) {
        var vm = this;
        vm._id = $stateParams.id;
        UsersService.GetById(vm._id).then(function(data) {
            vm.user = data;
            vm.loading = false;
        }, function(error) {
            $log.debug('error:' + error);
        });
    }
})();
