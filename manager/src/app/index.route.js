(function() {
    'use strict';
    angular.module('bProject').config(routerConfig);
    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $authProvider) {

        $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'app/shared/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            }).state('signup', {
                url: '/signup',
                templateUrl: 'app/shared/signup/signup.html',
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
                templateUrl: 'app/resident/home/home.html',
                controller: 'MainController',
                controllerAs: 'main',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('pickup', {
                url: '/pickup',
                templateUrl: 'app/resident/pickup/pickup.html',
                controller: 'PickupController',
                controllerAs: 'pickup'
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
                templateUrl: 'app/manager/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('users', {
                url: '/manager/users',
                templateUrl: 'app/manager/users/users.html',
                controller: 'UsersController',
                controllerAs: 'users',
                resolve: {
                    loginRequired: loginRequired
                }
            }).state('usersEdit', {
                url: '/manager/users/:id',
                templateUrl: 'app/manager/users/edit.html',
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
