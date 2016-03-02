(function() {
    'use strict';
    angular.module('bProject').config(routerConfig);
    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $authProvider) {
        var vwTopBar = {
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navbar'
        };

        $stateProvider.state('home', {
            url: '/home',
            views: {
                'vw-topBar': vwTopBar,
                'vw-content': {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'main'
                },
                resolve: {
                  loginRequired: loginRequired
                }  
            }
        })
        .state('login', {
            url: '/',
            views: {
                'vw-topBar': vwTopBar,
                'vw-content': {
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login'
                },
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            }          
        })
        .state('signup', {
            url: '/signup',
            views: {
                'vw-topBar': vwTopBar,
                'vw-content': {
                    templateUrl: 'app/signup/signup.html',
                    controller: 'SignupController',
                    controllerAs: 'signup'
                }
            }          
        })  
        .state('users', {
            url: '/users',
            views: {
                'vw-topBar': vwTopBar,
                'vw-content': {
                    templateUrl: 'app/users/users.html',
                    controller: 'UsersController',
                    controllerAs: 'users'
                },
                resolve: {
                  loginRequired: loginRequired
                }                
            }
        })  
        .state('usersEdit', {
            url: '/users/:id',
            views: {
                'vw-topBar': vwTopBar,
                'vw-content': {
                    templateUrl: 'app/users/edit.html',
                    controller: 'UsersEditController',
                    controllerAs: 'edit'
                },
                resolve: {
                  loginRequired: loginRequired
                }                
            }
        })                               
        .state('timeline', {
            url: '/timeline',
            views: {
                'vw-topBar': vwTopBar,
                'vw-content': {
                    templateUrl: 'app/timeline/timeline.html',
                    controller: 'TimelineController',
                    controllerAs: 'timeline'
                },
                resolve: {
                  loginRequired: loginRequired
                }                
            }
        })
        .state('logout', {
            url: '/logout',
            views: {
                'vw-content': {
                    templateUrl: null,
                    controller: 'LogoutController',
                    controllerAs: 'logout'
                },
                resolve: {
                  loginRequired: loginRequired
                }  
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
        function skipIfLoggedIn($q, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }

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