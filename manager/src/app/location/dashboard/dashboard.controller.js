(function() {
  'use strict';

  angular
    .module('bProject')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(toastr,$scope, $timeout, $compile, $document) {
    var vm = this;
    vm.showToastr = showToastr;
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';       
    }

    vm.chartOptions = {
      chart: {        
        type: 'column' // change with your choice
       },
        title: {
            text: 'Users registered'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [30, 72, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
        }]
    };

    // Sample data for pie chart
    vm.pieData = [{
            name: "Sucess",
            y: 56.33
        }, {
            name: "Waiting",
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: "In course",
            y: 10.38
        }, {
            name: "Failed",
            y: 4.77
    }]; 

    $scope.$on('window.resize', function() {
        $timeout( function() {        
            var element = $document.find("chart1");
            $compile(element)($scope)
        }); 
    });    

  }
})();