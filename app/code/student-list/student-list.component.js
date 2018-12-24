'use strict';

angular.module('studentList').component('studentList', {
    templateUrl: "code/student-list/student-list.template.html",
    controller: function studentListController() {
        this.studentList = [
            {
                name: "Madhavan",
                dob: "31-07-2014"
            },
            {
                name: "Ritesh",
                dob: "12-06-2014"
            },
            {
                name: "Ramesh",
                dob: "10-01-2014"
            }
        ];
    }
})