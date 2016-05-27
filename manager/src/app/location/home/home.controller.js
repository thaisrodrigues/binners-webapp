(function() {
  'use strict';

  angular
    .module('bProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.username = "Emerson Mellado";
  }
})();