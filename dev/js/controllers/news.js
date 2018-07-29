
app.controller('NewsController', ['$scope','fbFeed','fbEvents','$http','$sce','$location', function($scope,fbFeed,fbEvents, $http, $sce, $location) { 

	var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('News | Improv Comedy Mumbai | India');

    fbFeed.success(function(data){ 

        $scope.fbNews = data.data;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

 
}]); 


