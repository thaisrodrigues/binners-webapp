(function() {
    'use strict';
    angular.module('bProject').controller('UsersController', UsersController);
    /** @ngInject */
    UsersController.$inject = ['toastr','UsersService','$log'];
    function UsersController(toastr, UsersService, $log) {
        var vm = this;
        UsersService.GetAll().then(function(data) {
            vm.users = data;
            vm.loading = false;
        }, function(error) {
            $log.debug('error:' + error);
        });
    }
})();
