(function() {
    'use strict';
    angular.module('bProject')
    .directive('bpNavbar', bpNavbar);    

    function bpNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '='
            },
            controller: NavbarController,
            controllerAs: 'navbar',
            bindToController: true
        };
        return directive;
    }

    function NavbarController($auth, $location) {
        var vm = this;
        vm.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };       
        vm.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };        
    }    
})();