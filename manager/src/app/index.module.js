(function() {
  'use strict';

  angular
    .module('bProject', ['datatables', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'satellizer']);
    // .controller('WithPromiseCtrl', WithPromiseCtrl);

    // function WithPromiseCtrl(DTOptionsBuilder, DTColumnBuilder, $resource) {
    //     var vm = this;
    //     vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
    //         return $resource('data.json').query().$promise;
    //     }).withPaginationType('full_numbers');

    //     vm.dtColumns = [
    //         DTColumnBuilder.newColumn('id').withTitle('ID'),
    //         DTColumnBuilder.newColumn('firstName').withTitle('First name'),
    //         DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    //     ];
    // }    

})();


