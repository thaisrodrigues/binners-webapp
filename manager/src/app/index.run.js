(function() {
  'use strict';

  angular
    .module('bProject')
    .run(runBlock);

  function runBlock($rootScope, $window, $timeout) {
    var timeout;
    $window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = $timeout(function() {
            $rootScope.$broadcast('window.resize');
        }, 100);
    });	
  }

})();

