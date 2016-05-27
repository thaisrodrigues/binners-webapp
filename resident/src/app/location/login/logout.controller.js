(function() {
    'user strict';
    angular.module('bProject')
    .controller('LogoutController', LogoutController);

    function LogoutController ($location, $auth, toastr) {    	
        if (!$auth.isAuthenticated()) {
            return;
        }
        $auth.logout().then(function() {
            toastr.info('You have been logged out');
            $location.path('/');
        });
    }
})();