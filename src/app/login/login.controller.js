(function() {
    'use strict';
    angular.module('bProject')
    .controller('LoginController', LoginController);
    
    function LoginController($location, $auth, toastr, Api) {
        var vm = this;    

        vm.login = function() {
            var opts = {
                url: Api.BASE_API + '/auth',
                method:'POST'
            }            
            $auth.login(vm.user, opts).then(function() {
                toastr.success('You have successfully signed in!');
                $location.path('/');
            }).catch(function(error) {                
                toastr.error(error.data.details.message);
            });
        };

        vm.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        vm.authenticate = function(provider) {
            console.log(provider);
            $auth.authenticate(provider).then(function() {
                toastr.success('You have successfully signed in with ' + provider + '!');
                $location.path('/');
            }).catch(function(error) {
                if (error.error) {
                    // Popup error - invalid redirect_uri, pressed cancel button, etc.
                    toastr.error(error.error);
                } else if (error.data) {
                    // HTTP response error from server
                    toastr.error(error.data.message, error.status);
                } else {
                    toastr.error(error);
                }
            });
        };
    }
})();