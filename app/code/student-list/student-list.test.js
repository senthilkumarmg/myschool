describe('mySchoolController', function() {
    beforeEach(module("mySchoolApp"));

    it("number of students should be 2", inject(function($controller) {
        var scope = {};
        var ctrl = $controller('mySchoolCtrl', {$scope: scope});
    
        expect(scope.students.length).toBe(2);    
    }));
});