app.controller('PhotosController', ['$scope','instagram','fbEvents','$sce','$routeParams','$location', function($scope,instagram,fbEvents,$sce,$routeParams,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    var num = $routeParams.num;

    $('title').text('Photos | Improv Comedy Mumbai | India');

    instagram.success(function(data) { 
        // console.log(data); 
        var instagram = data.data;

        instagram.forEach(function(val,i){

            if(num == val.index) {
                // console.log(val);
                if(val.type == 'video'){
                    // console.log(val);
                    $scope.video = $sce.trustAsResourceUrl(val.videos.standard_resolution.url);
                    $scope.showVideo = true;
                    $scope.showImg = false;
                    $scope.poster = val.images.standard_resolution.url;
                } else {
                    $scope.showImg = true;
                    $scope.showVideo = false;
                    $scope.video = null;
                    $scope.poster = null;
                }

                $scope.img = val.images.standard_resolution.url;

                var caption = val.caption.text;
                caption = caption.split(' ');
                var url;
                var hash;
                caption.forEach(function(val,i){
                    if(val.indexOf('#') !== -1){
                        hash = val.replace(/#/g,'');
                        url = '<a href="https://www.instagram.com/explore/tags/'+hash+'" target="_blank">'+val+'</a>';
                        caption.splice(i,1,url);
                    } else if(val.indexOf('@') !== -1){
                        hash = val.replace(/@/g,'');
                        url = '<a href="https://www.instagram.com/'+hash+'" target="_blank">'+val+'</a>';
                        caption.splice(i,1,url);
                    }
                }); 

                caption = caption.join(' ');
                $scope.caption = $sce.trustAsHtml(caption);


                // $scope.caption = val.caption.text;
                var dateNum = parseInt(val.created_time)*1000;
                var date = new Date(dateNum);
                var day = date.getDate();
                var month = date.getMonth();
                // console.log(date,day,month);
                var monthsArr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
                $scope.date = monthsArr[month] +' ' +day;
            }
        });

        $scope.instagram = instagram;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 


