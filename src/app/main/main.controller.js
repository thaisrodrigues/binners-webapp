(function() {
  'use strict';

  angular
    .module('bProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr) {
    var vm = this;
    vm.showToastr = showToastr;

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }
})();
