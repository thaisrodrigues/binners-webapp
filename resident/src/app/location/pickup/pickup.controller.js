(function() {
    'use strict';
    angular.module('bProject')
        .controller('PickupController', PickupController);

    function PickupController() {
        var vm = this;
        vm.formData = {};

        vm.dateConfig = {
            format: 'mm-dd-yyyy'
        };

        vm.timeConfig = {
            min: [7, 0],
            max: [18, 0]
        }

        // function to process the form
        vm.processForm = function() {
            alert('awesome!');
        };

        vm.valuationDatePickerOpen = function($event) {
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation(); // This is the magic
            }
            vm.valuationDatePickerIsOpen = true;
        };

        vm.valuationDate = new Date();
        vm.valuationDatePickerIsOpen = false;
    }

})();
