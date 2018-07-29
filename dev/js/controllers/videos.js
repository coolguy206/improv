app.controller('VideosController', ['$scope','youtube','fbEvents','$sce','$routeParams','$location', function($scope,youtube,fbEvents,$sce,$routeParams,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    var num = $routeParams.num;
    var title = $routeParams.title;

    youtube.success(function(data) { 
        // console.log(data); 
        var youtube = data.items;

        youtube.forEach(function(val,i){

            if(num == val.index) {

                // console.log(val);
                $('title').text(val.snippet.title + ' | Videos | Improv Comedy Mumbai | India');
                $scope.title = val.snippet.title;
                var videoSrc = 'https://www.youtube.com/embed/'+val.snippet.resourceId.videoId+'?rel=0';
                $scope.videoSrc = $sce.trustAsResourceUrl(videoSrc);

                var description = val.snippet.description;
                description = description.replace(/\n/g,' ');
                description = description.split(' ');
                var url;
                description.forEach(function(val,i){
                    if(val.indexOf('www') !== -1){
                        if(val.indexOf('http') == -1){
                            url = '<a href="http://'+val+'" target="_blank">'+val+'</a>';
                        } else {
                            url = '<a href="'+val+'" target="_blank">'+val+'</a>';    
                        }
                        description.splice(i,1,url);
                    }
                });

                description = description.join(' ');
                $scope.description = $sce.trustAsHtml(description);

                
                // $scope.description = val.snippet.description;
                var date = new Date(val.snippet.publishedAt);
                var monthsArr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
                var month = date.getMonth();
                month = monthsArr[month];
                var day = date.getDate();
                var year = date.getFullYear();
                $scope.date = month + ' ' + day + ', ' + year;

            }
        });

        $scope.youtube = youtube;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


