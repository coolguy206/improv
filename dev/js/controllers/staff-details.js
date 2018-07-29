app.controller('StaffDetailsController', ['$scope','wpStaff','fbEvents','$routeParams','$sce','$location', function($scope,wpStaff,fbEvents,$routeParams,$sce,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'staff';
    $scope.num = $routeParams.num;
    $scope.cast = $routeParams.cast;
    var cast = $routeParams.cast;

    wpStaff.success(function(data) {  
        $('#loading').remove();
        var staffMembers = data.posts;
        staffMembers.forEach(function(val,i){
            if(cast == val.slug) {
                $('title').text(val.title + ' | Staff | Improv Comedy Mumbai | India');
                $scope.staffTitle = val.title;
                $scope.staffImg = val.thumbnail_images.full.url;                
                $scope.staffContent = $sce.trustAsHtml(val.content); 
            } 
        });
        $scope.staffMembers = staffMembers;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


