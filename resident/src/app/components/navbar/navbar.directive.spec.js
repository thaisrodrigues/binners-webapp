(function() {
    'use strict';
    describe('directive navbar', function() {
        var vm;
        var el;
        beforeEach(module('bProject'));
        beforeEach(inject(function($compile, $rootScope) {
            el = angular.element('<vh-navbar></vh-navbar>');
            $compile(el)($rootScope.$new());
            $rootScope.$digest();
            vm = el.isolateScope().vm;
            spyOn(vm, 'isAuthenticated');
        }));
        it('should be compiled', function() {
            expect(el.html()).not.toEqual(null);
        });
        it('should have isolate scope object with instanciate members', function() {
            expect(vm).toEqual(jasmine.any(Object));
            expect(vm.isAuthenticated).toEqual(jasmine.any(Function));
            expect(vm.isActive).toEqual(jasmine.any(Function));
        });
    });
})();