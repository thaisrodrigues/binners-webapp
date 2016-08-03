(function() {
    'use strict';
    angular.module('bProject').config(routerConfig);
    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $authProvider) {

        $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'app/location/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            }).state('signup', {
                url: '/signup',
                templateUrl: 'app/location/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup'
            }).state('logout', {
                url: '/logout',
                templateUrl: null,
                controller: 'LogoutController',
                controllerAs: 'logout',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('home', {
                url: '/',
                templateUrl: 'app/location/home/home.html',
                controller: 'MainController',
                controllerAs: 'main',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('pickups', {
                url: '/manager/pickups',
                templateUrl: 'app/location/pickups/pickups.html',
                controller: 'PickupsController',
                controllerAs: 'pickups',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('pickupsEdit', {
                url: '/manager/pickups/:id',
                templateUrl: 'app/location/pickups/pickups-edit.html',
                controller: 'PickupsEditController',
                controllerAs: 'pickupsedit',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('timeline', {
                url: '/timeline',
                templateUrl: 'app/timeline/timeline.html',
                controller: 'TimelineController',
                controllerAs: 'timeline',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('dashboard', {
                url: '/manager/dashboard',
                templateUrl: 'app/location/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('users', {
                url: '/manager/users',
                templateUrl: 'app/location/users/users.html',
                controller: 'UsersController',
                controllerAs: 'users',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('usersEdit', {
                url: '/manager/users/:id',
                templateUrl: 'app/location/users/edit.html',
                controller: 'UsersEditController',
                controllerAs: 'edit',
                resolve: {
                    loginRequired: loginRequired
                }
            });


        $urlRouterProvider.otherwise('/');
        $authProvider.facebook({
            clientId: '756473507829984'
        });
        $authProvider.google({
            clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
        });
        $authProvider.twitter({
            url: '/auth/twitter'
        });
        /*
        function skipIfLoggedIn($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }
        */
        function loginRequired($q, $location, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('/login');
            }
            return deferred.promise;
        }
    }
})();
