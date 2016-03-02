(function() {
    'use strict';
    angular.module('bProject').controller('SignupController', SignupController);

    function SignupController ($location, $auth, toastr, Api, $log) {
        var vm = this;  
        vm.signup = function() {
          var opts = {
              url: Api.BASE_API + '/users',
              method:'POST'
          }
          vm.newUser = {
            email: vm.user.email,
            password: vm.user.password,
            phone: vm.user.phone,
            active: true
          }
          $log.debug(vm.newUser);               
          $auth.signup(vm.newUser, opts)
            .then(function(response) {
              $log.debug(response);
              $auth.setToken(response);
              $location.path('/');
              toastr.info('You have successfully created a new account and have been signed-in');
            })
            .catch(function(response) {
              toastr.error(response.data.message);
            });
        };
    }
})();