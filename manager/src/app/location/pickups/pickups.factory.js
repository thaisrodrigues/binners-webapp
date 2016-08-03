(function () {
    'use strict';

    angular
        .module('bProject')
        .factory('PickupsService', PickupsService);

    function PickupsService($http, $auth, $log, Api) {
        var service = {};

        service.GetAll = GetAll;
        service.Update = Update;
        service.Delete = Delete;
        service.GetPhotosById = GetPhotosById;

        return service;

        function GetAll() {
            return $http.get(url()).then(handleSuccess, handleError('Error getting all users'));
        }

        function GetPhotosById(id) {
            return $http.get(url() +'/' + id+'/photos').then(handleSuccess, handleError('Error getting user by id'));
        }
        function Update(pickup) {
            return $http.put(url() +'/' + pickup.id, pickup).then(handleSuccess, handleError('Error updating pickup'));
        }

        function Delete(id) {
            return $http.delete(url() +'/' + id).then(handleSuccess, handleError('Error deleting pickup'));
        }

        // private functions

        function url(){
          return Api.BASE_API + '/pickups';
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
})();
