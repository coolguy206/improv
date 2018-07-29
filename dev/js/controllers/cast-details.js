app.controller('CastDetailsController', ['$scope','wpCast','fbEvents','$routeParams','$sce','$location', function($scope,wpCast,fbEvents,$routeParams,$sce, $location) { 

    $scope.title = 'cast';
    $scope.num = $routeParams.num;
    $scope.cast = $routeParams.cast;
    var cast = $routeParams.cast;

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    wpCast.success(function(data) { 
        $('#loading').remove();
        var castMembers = data.posts;
        castMembers.forEach(function(val,i){
            if(cast == val.slug) {
                $('title').text(val.title + ' | Cast | Improv Comedy Mumbai | India');
                $scope.castTitle = $sce.trustAsHtml(val.title);
                $scope.castImg = val.thumbnail_images.full.url;                
                $scope.castContent = $sce.trustAsHtml(val.content);
            } 
        });
        $scope.castMembers = castMembers;
    });


    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


