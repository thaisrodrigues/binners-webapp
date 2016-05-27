(function() {
    'use strict';

    angular
        .module('bProject')
        .directive('bpAside', bpAside);

    function bpAside() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/aside/aside.html',
            scope: {
                username: '='
            },
            controller: AsideController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function AsideController() {
        }
    }

})();
