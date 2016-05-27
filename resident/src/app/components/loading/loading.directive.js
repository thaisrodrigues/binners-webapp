(function() {
    'use strict';
    angular.module('bProject')
    .directive('bpLoading', bpLoading);    

    function bpLoading() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/loading/loading.html',
            scope: {
                wait: '='
            },
            controller: LoadingController,
            controllerAs: 'loading',
            bindToController: true
        };
        return directive;        
    }
    function LoadingController() {    
    }        
})();