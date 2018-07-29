app.controller('StaffController', ['$scope','wpStaff','fbEvents','$location', function($scope,wpStaff,fbEvents,$location) { 

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'staff';

    $('title').text('Staff | Improv Comedy Mumbai | India');

    wpStaff.success(function(data) { 
        $('#loading').remove();
        var staffMembers = data.posts;
        // console.log(staffMembers);
        staffMembers.forEach(function(val,i){
            val.index = i;
        });

        $scope.staffMembers = staffMembers;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


