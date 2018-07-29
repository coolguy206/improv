app.controller('AlumniDetailsController', ['$scope','wpAlumni','fbEvents','$routeParams','$sce','$location', function($scope,wpAlumni,fbEvents,$routeParams,$sce,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'alumni';
    $scope.num = $routeParams.num;
    $scope.cast = $routeParams.cast;
    var cast = $routeParams.cast; 

    wpAlumni.success(function(data) { 
        $('#loading').remove();
        var alumniMembers = data.posts;
        alumniMembers.forEach(function(val,i){
            if(cast == val.slug) {
                $('title').text(val.title + ' | Alumni | Improv Comedy Mumbai | India');
                $scope.alumniTitle = val.title;
                $scope.alumniImg = val.thumbnail_images.full.url;                
                $scope.alumniContent = $sce.trustAsHtml(val.content);
            } 
        });
        $scope.alumniMembers = alumniMembers;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


