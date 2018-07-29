app.controller('PressController', ['$scope','wpPress','fbEvents','$location', function($scope,wpPress,fbEvents,$location) {  

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Press | Improv Comedy Mumbai | India');

    wpPress.success(function(data) { 
        $('#loading').remove();
        var press = data.posts; 
        // console.log(press);
        press.forEach(function(val,i){
            val.index = i;
        });

        $scope.press = press;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


