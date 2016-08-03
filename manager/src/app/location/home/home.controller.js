(function() {
  'use strict';

  angular
    .module('bProject')
    .controller('MainController', function(){
      var vm = this;
      vm.labels = ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];
      vm.series = ['Series A', 'Series B'];

      vm.data = [
       [65, 59, 80, 81, 56, 55, 40]
      ];
      vm.colors=  [{
          fillColor: '#45B33D',
          strokeColor: 'rgba(47, 132, 71, 0.8)',
          highlightFill: 'rgba(47, 132, 71, 0.8)',
          highlightStroke: 'rgba(47, 132, 71, 0.8)'
      }];
    });


})();
