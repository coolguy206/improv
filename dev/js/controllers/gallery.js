app.controller('GalleryController', ['$scope','instagram','youtube','fbEvents','$sce','$location', function($scope,instagram,youtube,fbEvents,$sce, $location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Gallery | Improv Comedy Mumbai | India');

    instagram.success(function(data) {
        // console.log(data); 
        var instagram = data.data;

        $scope.instagram = instagram;
    }); 

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


