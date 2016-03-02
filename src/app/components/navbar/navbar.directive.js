(function() {
    'use strict';
    angular.module('bProject')
    .directive('vhNavbar', vhNavbar)
    .controller('NavbarController', NavbarController);
    
    /** @ngInject */
    function vhNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }

    function NavbarController($scope, $auth, $location) {
        var vm = this;
        vm.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };       
        vm.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };        
    }    
})();