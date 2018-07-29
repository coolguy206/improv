app.controller('ShowsClassesController', ['$scope','fbEvents','$routeParams','$location', function($scope,fbEvents, $routeParams, $location) { 

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    var title = $routeParams.category;

    $('title').text(title + ' | Improv Comedy Mumbai | India');

    $scope.title = $routeParams.category;

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


