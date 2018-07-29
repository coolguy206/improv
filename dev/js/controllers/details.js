app.controller('detailsController', ['$scope','fbEvents','$routeParams','$sce','$location', function($scope,fbEvents, $routeParams, $sce, $location) { 

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    var addRmClass = function(elem, class1, class2){
        $(elem).removeClass(class1);
        $(elem).addClass(class2);
    };


    if($(window).width() <= 1024) {
        addRmClass('.fa-clock-o','fa-3x','fa-2x');
        addRmClass('.fa-calendar','fa-3x','fa-2x');
    }

  $scope.category = $routeParams.category;
  var num = $routeParams.num;
  var pageURL = $routeParams.title;
  var title = pageURL.replace(/-/g, ' ');
  $scope.title = title;


  fbEvents.success(function(data) { 
  	// console.log(data);

    var shows = data.data;
    var myArr = [];

    shows.forEach(function(val,i){ 

        if(num == val.index) {
            
            shows.forEach(function(arr, j){
                if(val.category == arr.category){
                   myArr.push(arr); 
                }
            });

            // console.log(myArr.length);

            myArr.forEach(function(arr,j){
                if(val.index == arr.index){
                    if(j - 1 < 0) {
                        $scope.prevNum = null;
                        $scope.prevURL = null;
                        $scope.prevImg = null;
                        $scope.prevName = null;
                        $scope.prevDate = null;
                        $scope.prevShow = false; 
                    } else {
                        $scope.prevNum = myArr[j-1].index;
                        $scope.prevURL = myArr[j-1].url;
                        $scope.prevImg = myArr[j-1].img;
                        $scope.prevName = myArr[j-1].name;
                        $scope.prevDate = myArr[j-1].date;
                        $scope.prevShow = true;
                    }

                    if(j + 1 == myArr.length) {
                        $scope.nextNum = null;
                        $scope.nextURL = null;
                        $scope.nextImg = null;
                        $scope.nextName = null;
                        $scope.nextDate = null;
                        $scope.nextShow = false;
                    } else {
                        $scope.nextNum = myArr[j+1].index;
                        $scope.nextURL = myArr[j+1].url;
                        $scope.nextImg = myArr[j+1].img;
                        $scope.nextName = myArr[j+1].name;
                        $scope.nextDate = myArr[j+1].date;
                        $scope.nextShow = true;
                    }    
                }
            });

            var startTime = val.startTime;
            startTime = startTime.split(' ');
            startTime = startTime[0];

            var duration;

            if(val.endTime !== undefined) {
                var endTime = val.endTime;
                endTime = endTime.split(' ');
                endTime = endTime[0];

                duration = startTime + ' - ' + endTime;
            } else {
                duration = startTime;
            }

            var category = $routeParams.category;
            $('title').text(val.name + ' | ' + category + ' | Improv Comedy Mumbai | India');
            $scope.description = val.description;
            $scope.desc = val.desc;
            $scope.date = val.date;
            $scope.img = val.img;
            $scope.name = val.name;
            $scope.start = val.startTime;
            $scope.day = val.day;
            $scope.end = val.endTime;
            $scope.duration = duration;

            if(val.place !== undefined){
                $scope.place_name = val.place.name;
                $scope.place_address = val.place.location.street;
                $scope.place_city = val.place.location.city;
                $scope.place_country = val.place.location.country;
                $scope.place_zip = val.place.location.zip;
                $scope.lat = val.place.location.latitude;
                $scope.lng = val.place.location.longitude;
                var map = 'http://maps.google.com?&q='+val.place.location.latitude+','+val.place.location.longitude+'&z=19&output=embed';
                $scope.embed = $sce.trustAsResourceUrl(map);
                $scope.location = true;
            } else {
                $scope.location = false;
            }
            

        }

    });

    $scope.events = shows;
    
  });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
 
}]); 


