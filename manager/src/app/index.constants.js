(function() {
  'use strict';

  angular
   .module('bProject')
   .constant('Api', {
       BASE: 'http://binners.herokuapp.com/api',
       BASE_API: 'http://binners.herokuapp.com/api/v1.0'
   });

})();
