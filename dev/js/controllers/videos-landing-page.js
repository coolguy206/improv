app.controller('VideosLandingController', ['$scope','youtube','fbEvents','$sce','$location', function($scope,youtube,fbEvents,$sce,$location) { 
    
    $('title').text('Videos | Improv Comedy Mumbai | India');

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location); 

    youtube.success(function(data){
        // console.log(data);

        var youtube = data.items;

        $scope.youtube = youtube;
    });
     

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


