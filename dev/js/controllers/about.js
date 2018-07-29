app.controller('AboutController', ['$scope','wpAbout','fbEvents','$sce','$location', function($scope,wpAbout,fbEvents,$sce,$location) {  

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('About | Improv Comedy Mumbai | India');

    wpAbout.success(function(data) { 
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


