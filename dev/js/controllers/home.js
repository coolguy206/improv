
app.controller('HomeController', ['$scope','fbEvents','fbFeed','$http','$sce','$location', function($scope,fbEvents,fbFeed, $http, $sce, $location) { 

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Theatre Sports | Improv Comedy Mumbai | India');

    fbEvents.success(function(data) { 
        // console.log(data); 
        var fbEvents = data.data;
        $scope.fbEvents = fbEvents;
    });


    fbFeed.success(function(data){
        // console.log(data);
        var fbFeed = data.data;

        $scope.filterVideo = function(url){
            return $sce.trustAsResourceUrl(url);
        };
        $scope.fbFeed = fbFeed;
    });
 
}]); 


