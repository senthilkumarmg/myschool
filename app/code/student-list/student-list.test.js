describe('My School App Test', function() {
    beforeEach(module("studentList"));

    describe('test the student list controller', function() {
        var ctrl;
        beforeEach(inject(function($componentController) {
            ctrl = $componentController('studentList');
        }));

        it('Total list count must be 3', function() {
            expect(ctrl.studentList.length).toBe(3);
        })
    });
});