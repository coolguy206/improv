app.controller('AlumniController', ['$scope','wpAlumni','wpStaff','fbEvents','$location', function($scope,wpAlumni,wpStaff,fbEvents,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'alumni';

    $('title').text('Alumni | Improv Comedy Mumbai | India');

    wpAlumni.success(function(data) { 
        $('#loading').remove();
        var alumniMembers = data.posts;
        // console.log(alumniMembers);
        alumniMembers.forEach(function(val,i){
            val.index = i;
        });

        $scope.alumniMembers = alumniMembers;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


