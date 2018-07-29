app.controller('CastController', ['$scope','wpCast','fbEvents','$location', function($scope,wpCast,fbEvents,$location) {  

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'cast';

    $('title').text('Cast | Improv Comedy Mumbai | India');

    wpCast.success(function(data) { 
        $('#loading').remove();

        var castMembers = data.posts;
        // console.log(castMembers);
        castMembers.forEach(function(val,i){
            val.index = i;
        });

        $scope.castMembers = castMembers;

    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 




