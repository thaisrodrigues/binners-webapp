(function () {
    'use strict';

    angular
        .module('bProject')
        .factory('LoginService', LoginService);
        
    function LoginService($q, $http, $log, Api) {
        var service = {};
        service.Auth = Auth;
        return service;

        function Auth(user) {
            var deferred = $q.defer();
            var url = Api.BASE_API + '/auth';
            $log.debug(user);
            $log.debug(url);
            //return $http.post(BASE_API + '/auth', user).then(handleSuccess, handleError('Error creating user'));
            $http.post(url, user)
                .success(deferred.resolve)
                .error(deferred.reject);

            return deferred.promise;
        }
    }
})();
