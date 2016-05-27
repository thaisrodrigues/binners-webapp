(function() {
  'use strict';

  angular
    .module('bProject')
    .controller('TimelineController', TimelineController);

  /** @ngInject */
  function TimelineController() {
    var vm = this;
    vm.a = "";
  }
})();
