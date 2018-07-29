app.controller('HireUsController', ['$scope','wpHireUs','fbEvents','$sce','$location', function($scope,wpHireUs,fbEvents,$sce,$location) {  

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Hire Us | Improv Comedy Mumbai | India');

    wpHireUs.success(function(data) { 
        // console.log(data);
        $('#loading').remove();

        var about = data.page;
        $scope.content = $sce.trustAsHtml(about.content);
   
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


