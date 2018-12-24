'use strict';

angular.module('studentList').component('studentList', {
    
    templateUrl: "code/student-list/student-list.template.html",
    controller: ['$http', function studentListController($http) {
        var self = this;
        $http.get('data/studentList.json').then(function(response) {
            self.studentList = response.data;
        })
    }]
})