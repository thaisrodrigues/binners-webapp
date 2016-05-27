(function() {
    'use strict';
    angular.module('bProject').controller('UsersController', UsersController).controller('UsersEditController', UsersEditController);
    /** @ngInject */
    function UsersController(toastr, UsersService, $log) {
        var vm = this;        
        UsersService.GetAll().then(function(data) {
            vm.users = data;
            vm.loading = false;
        }, function(error) {
            $log.debug('error:' + error);
        });           
    }

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