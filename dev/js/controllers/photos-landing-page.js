app.controller('PhotosLandingController', ['$scope','instagram','fbEvents','$sce','$location', function($scope,instagram,fbEvents,$sce,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Photos | Improv Comedy Mumbai | India');

    instagram.success(function(data) {
        // console.log(data); 
        var instagram = data.data;

        $scope.instagram = instagram;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


