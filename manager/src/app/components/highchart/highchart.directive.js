(function() {
    'use strict';
    angular.module('bProject')
    .directive('hcChart', hcChart)
    .directive('hcPieChart', hcPieChart);
    //.controller('HighChartController', HighChartController);
    
    function hcPieChart() {
        var directive = {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: scope.title
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        data: scope.data
                    }]
                });
            }
        };
        return directive;
    }   

    /** @ngInject */
    function hcChart() {
        var directive = {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], scope.options);
            }
        };
        return directive;
    }
    // function HighChartController($scope, $auth, $location) {            
    // }    
})();            