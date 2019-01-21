(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var app = angular.module('myApp',['ngRoute']);

// change the year
var thisYearFn = require('../../dev/js/functions/changeYear.js');
thisYearFn('.year');


$(window).resize(function(){
	var changeHeight = require('../../dev/js/functions/changeHeight.js'); 
	changeHeight(); 
});



$('.fa-navicon, #off-canvas-lt a').click(function(){
    if($('.wrapper').hasClass('left')){
        $('.wrapper').removeClass('left');
    } else {
        $('.wrapper').addClass('left');
    }
    
});

$('.fa-gear, #off-canvas-rt a').click(function(){
    if($('.wrapper').hasClass('right')){
        $('.wrapper').removeClass('right');
        setTimeout(function(){
            $('#off-canvas-rt').removeClass('display');
        },1000);
        
    } else {
        $('#off-canvas-rt').addClass('display');
        $('.wrapper').addClass('right');

    }
    
});

$('#off-canvas-lt #close-icon, #off-canvas-rt #close-icon').click(function(){
    $('.wrapper').removeClass('left');
    $('.wrapper').removeClass('right');
    setTimeout(function(){
        $('#off-canvas-rt').removeClass('display');
    },1000);
});

app.controller('HomeController', ['$scope','fbEvents','fbFeed','$http','$sce','$location', function($scope,fbEvents,fbFeed, $http, $sce, $location) { 

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Theatre Sports | Improv Comedy Mumbai | India');

    fbEvents.success(function(data) { 
        // console.log(data); 
        var fbEvents = data.data;
        $scope.fbEvents = fbEvents;
    });


    fbFeed.success(function(data){
        // console.log(data);
        var fbFeed = data.data;

        $scope.filterVideo = function(url){
            return $sce.trustAsResourceUrl(url);
        };
        $scope.fbFeed = fbFeed;
    });
 
}]); 



app.config(function($routeProvider) { 
  $routeProvider
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/about', { 
      controller: 'AboutController', 
      templateUrl: 'views/about.html'  
    })
    .when('/hire-us', { 
      controller: 'HireUsController',
      templateUrl: 'views/hire-us.html'  
    })
    .when('/gallery', { 
      controller: 'GalleryController', 
      templateUrl: 'views/gallery.html'  
    })
    .when('/photos', { 
      controller: 'PhotosLandingController', 
      templateUrl: 'views/photos-landing-page.html'  
    })
    .when('/videos', { 
      controller: 'VideosLandingController', 
      templateUrl: 'views/videos-landing-page.html'  
    })
    .when('/photos/:num', { 
      controller: 'PhotosController', 
      templateUrl: 'views/photos.html'  
    })
    .when('/videos/:num/:title', { 
      controller: 'VideosController', 
      templateUrl: 'views/videos.html'  
    })
    .when('/cast', { 
      controller: 'CastController', 
      templateUrl: 'views/cast.html'  
    })
    .when('/alumni', { 
      controller: 'AlumniController', 
      templateUrl: 'views/alumni.html'  
    })
    .when('/staff', {  
      controller: 'StaffController', 
      templateUrl: 'views/staff.html'  
    })
    .when('/press', {  
      controller: 'PressController', 
      templateUrl: 'views/press.html'  
    })
    .when('/news', {  
      controller: 'NewsController', 
      templateUrl: 'views/news.html'  
    })
    .when('/cast/:num/:cast', { 
      controller: 'CastDetailsController', 
      templateUrl: 'views/cast-details.html'  
    })
    .when('/alumni/:num/:cast', { 
      controller: 'AlumniDetailsController', 
      templateUrl: 'views/alumni-details.html' 
    })
    .when('/staff/:num/:cast', { 
      controller: 'StaffDetailsController', 
      templateUrl: 'views/staff-details.html'  
    })
    .when('/:category', { 
      controller: 'ShowsClassesController', 
      templateUrl: 'views/shows-classes.html'  
    })
    .when('/:category/:num/:title', { 
      controller: 'detailsController', 
      templateUrl: 'views/details.html'  
    })   
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

var improvId = '155588661156148';

// user token expires at some point
// var token = '?access_token=EAAEDcqhSBA8BAHFEjYjofxPwWtjyRP3C1Er8cUorW8dsxVnuP9ZAEdqsT3MKlgTiSugZBsSEdwx0smCKgpiFqkW8n7ocTP3FZBJBTPoqNggTpocf0lD7hEcAPz6J4WemGe55h9AQWyT1B1ko1quUyJpdxAWbmTAeQCsPFrFZAAZDZD';

//app token never expires
// var token = '?access_token=285265961813007|kWebjxfAmbFyutsoJlXKOnvLcO8';
// var token = '?access_token=EAAEDcqhSBA8BALx7vlskKTEwWSrimYCg8WV6Y3qes8FAPipxE9foWUp3jQjgLVPNUqFZBNl58ZATU9GTv0aIJgCmxH7YccJDXRrn0trnTAz8lCQUR9ZBHortVQ3F5Tqbd5ZBPF9BQzk7at1IQeyZAjADgUYv3NZAsGJ1ct1W7oiAZDZD';

var token = '?access_token=EAAEDcqhSBA8BAHsMOHE080Y4bG4xZAcUPBYPAdZC34x4hpmPu9IZCIStRpx3m0e8p4yGVtnQFS9ApOjaV6UiYhw2aMbK1H9ukzlVD7Uv3qzonQkoIEzgDlk4PwPfeEqcZBskP1C2eojXZBO8jBGkHwWIKaL7lWmyjfDyA7MNfwAZDZD';

var baseURL = 'https://graph.facebook.com/v3.1/';

var addToObj = require('../../dev/js/functions/addToObj.js');

var makeDate = require('../../dev/js/functions/makeDate.js');

//get the events
app.factory('fbEvents', ['$http', '$sce', function($http, $sce) {
  return $http.get(baseURL+improvId+'/events'+token+'&fields=description,end_time,start_time,is_canceled,name,place,ticket_uri,cover')
            .success(function(data) {
                console.log('getting facebook events');
                console.log(data.data);
                var fbEvents = data.data;

                fbEvents.forEach(function(val,i){
                  var id = val.place.id;
                  // console.log('the id:' + id);
                  var name = val.name.toLowerCase();
                  // console.log('the name:' + name);
                  var imgSource;

                  var description = val.description;
                  description = description.split('\n');
                  description.forEach(function(val,i){
                    var p = '<p>'+val+'</p>';
                    description.splice(i,1,p);
                  });

                  description = description.join(' ');
                  // console.log('the description:' + description);

                  var a;
                  var str;
                  description = description.replace(/\n/g,'');
                  description = description.split(' ');
                  description.forEach(function(val,i){
                    if(val.indexOf('http') !== -1){
                      if(val.indexOf('<p>') !== -1){
                        str = val.slice(3,-4);
                        a = '<p><a href="'+str+'" target="_blank">'+str+'</a></p>';
                        description.splice(i,1,a);
                      } else if(val.indexOf('</p>') !== -1){
                        str = val.slice(0,-4);
                        a = '<p><a href="'+str+'" target="_blank">'+str+'</a></p>';
                        description.splice(i,1,a);
                      } else {
                        a = '<p><a href="'+val+'" target="_blank">'+val+'</a></p>';
                        description.splice(i,1,a);
                      }

                    }
                  });

                  description = description.join(' ');
                  val.desc = $sce.trustAsHtml(description);

                  //if cover is not undefined
                  // console.log('the image:' + val.cover);
                  if(val.cover !== undefined){
                    imgSource = val.cover.source;
                    addToObj(name,val,imgSource,i);
                  }
                  else {
                    console.log('no cover image available');
                  }

                });

              	return data;
            })
            .error(function(err) {
              	return err;
            });
}]);

app.factory('fbFeed', ['$http','$sce', function($http,$sce) {
  return $http.get(baseURL+improvId+'/feed/'+token+'&fields=message,id,full_picture,story,created_time,source')
            .success(function(data) {
                console.log('getting facebook feed');
                // console.log(data);
                var fbFeed = data.data;

                fbFeed.forEach(function(val,i){
                  var date = makeDate(val, val.created_time);
                  val.date = date;
                  var video = val.source;
                  var url;
                  var hash;
                  if(val.message !== undefined){

                    var message = val.message;
                    message = message.replace(/\n/g,' ');
                    message = message.split(' ');

                    message.forEach(function(val,i){
                      if(val.indexOf('http') !== -1){
                          url = '<a href="'+val+'" target="_blank">'+val+'</a>';
                          message.splice(i,1,url);
                      } else if(val.indexOf('#') !== -1){
                          hash = val.replace(/#/g,'');
                          url = '<a href="https://www.instagram.com/explore/tags/'+hash+'" target="_blank">'+val+'</a>';
                          message.splice(i,1,url);
                      }
                    });

                    message = message.join(' ');
                    val.desc = $sce.trustAsHtml(message);
                  }

                  if (video !== undefined){
                    if(video.indexOf('autoplay=1') !== -1){
                      video = video.replace('autoplay=1','');
                      video = video + 'rel=0';
                      val.iframe = true;
                      val.hideVideo = false;
                      val.video = $sce.trustAsResourceUrl(video);
                    } else {
                      val.iframe = false;
                      val.hideVideo = true;
                      val.video = $sce.trustAsResourceUrl(video);
                    }
                    val.hideImg = false;
                  } else {
                    val.hideImg = true;
                  }
                });

              	return data;
            })
            .error(function(err) {
              	return err;
            });
}]);


var wordPressURL = 'http://improvcomedymumbai.com/api/';

app.factory('wpCast', ['$http', function($http) { 
  return $http.get(wordPressURL + 'get_tag_posts/?slug=ensemble&count=30') 
            .success(function(data) {
            	console.log('getting cast');
              
              var castMembers = data.posts;
        
              castMembers.forEach(function(val,i){
                val.index = i;
              });
              	return data; 

            }) 
            .error(function(err) { 
              	return err; 
            }); 
}]);

app.factory('wpAlumni', ['$http', function($http) { 
  return $http.get(wordPressURL + 'get_tag_posts/?slug=alumni&count=30') 
            .success(function(data) {
            	console.log('getting alumni');

              var castMembers = data.posts;
        
              castMembers.forEach(function(val,i){
                val.index = i;
              });

              	return data; 
            }) 
            .error(function(err) { 
              	return err; 
            }); 
}]); 

app.factory('wpStaff', ['$http', function($http) {
  return $http.get(wordPressURL + 'get_tag_posts/?slug=staff&count=30')  
            .success(function(data) {
            	console.log('getting staff');

              var castMembers = data.posts;
        
              castMembers.forEach(function(val,i){
                val.index = i;
              });
              
              	return data; 
            })
            .error(function(err) { 
              	return err; 
            }); 
}]);

app.factory('wpPress', ['$http', function($http) {
  return $http.get(wordPressURL + 'get_category_posts/?slug=press&count=100')  
            .success(function(data) {
              console.log('getting press');
                return data; 
            })
            .error(function(err) { 
                return err; 
            }); 
}]);

app.factory('wpAbout', ['$http', function($http) { 
  return $http.get(wordPressURL + 'get_page/?slug=company') 
            .success(function(data) {
                console.log('getting about');
              	return data; 
            }) 
            .error(function(err) { 
              	return err; 
            }); 
}]);


app.factory('wpHireUs', ['$http', function($http) { 
  return $http.get(wordPressURL + 'get_page/?slug=hire-us') 
            .success(function(data) {
                console.log('getting hire us');
              	return data; 
            }) 
            .error(function(err) { 
              	return err; 
            }); 
}]);
app.factory('instagram', ['$http', function($http) { 
  return $http.jsonp('https://api.instagram.com/v1/users/2040097928/media/recent?access_token=3187374881.f80df5f.4f7b1ad3585540f49c990f79e2d951fc&callback=JSON_CALLBACK') 
            .success(function(data) { 
            	console.log('getting instagram');
                // console.log(data);

            	var instagram = data.data;
        		instagram.forEach(function(val,i){ 
            		val.index = i;

            		if(val.type == 'video'){
                		val.showIcon = true;
            		} else {
                		val.showIcon = false;
            		}

        		});

              	return data; 
            }) 
            .error(function(err) { 
              	return err; 
            }); 
}]); 
app.factory('youtube', ['$http', function($http) { 
  return $http.jsonp('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUeLKZeqQfneekOIGBc_Sp_Q&maxResults=50&key=AIzaSyBBgc8XqssJ0R-2i4M2MXeEmX-jkiUOkQQ&callback=JSON_CALLBACK') 
            .success(function(data) { 
            	console.log('getting youtube'); 
                // console.log(data); 
            	var youtube = data.items;
            	
        		youtube.forEach(function(val,i){
            		val.index = i;

            		var url = val.snippet.title;
            		url = url.replace(/ /g,'-');
            		url = url.replace(/'/g,'');
            		url = url.replace(/&/g,'');
            		val.url = url;
        		});

              	return data; 
            }) 
            .error(function(err) { 
              	return err; 
            }); 
}]); 
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





app.controller('AlumniController', ['$scope','wpAlumni','wpStaff','fbEvents','$location', function($scope,wpAlumni,wpStaff,fbEvents,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'alumni';

    $('title').text('Alumni | Improv Comedy Mumbai | India');

    wpAlumni.success(function(data) { 
        $('#loading').remove();
        var alumniMembers = data.posts;
        // console.log(alumniMembers);
        alumniMembers.forEach(function(val,i){
            val.index = i;
        });

        $scope.alumniMembers = alumniMembers;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 



app.controller('StaffController', ['$scope','wpStaff','fbEvents','$location', function($scope,wpStaff,fbEvents,$location) { 

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'staff';

    $('title').text('Staff | Improv Comedy Mumbai | India');

    wpStaff.success(function(data) { 
        $('#loading').remove();
        var staffMembers = data.posts;
        // console.log(staffMembers);
        staffMembers.forEach(function(val,i){
            val.index = i;
        });

        $scope.staffMembers = staffMembers;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 



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



app.controller('AlumniDetailsController', ['$scope','wpAlumni','fbEvents','$routeParams','$sce','$location', function($scope,wpAlumni,fbEvents,$routeParams,$sce,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'alumni';
    $scope.num = $routeParams.num;
    $scope.cast = $routeParams.cast;
    var cast = $routeParams.cast; 

    wpAlumni.success(function(data) { 
        $('#loading').remove();
        var alumniMembers = data.posts;
        alumniMembers.forEach(function(val,i){
            if(cast == val.slug) {
                $('title').text(val.title + ' | Alumni | Improv Comedy Mumbai | India');
                $scope.alumniTitle = val.title;
                $scope.alumniImg = val.thumbnail_images.full.url;                
                $scope.alumniContent = $sce.trustAsHtml(val.content);
            } 
        });
        $scope.alumniMembers = alumniMembers;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 



app.controller('StaffDetailsController', ['$scope','wpStaff','fbEvents','$routeParams','$sce','$location', function($scope,wpStaff,fbEvents,$routeParams,$sce,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $scope.title = 'staff';
    $scope.num = $routeParams.num;
    $scope.cast = $routeParams.cast;
    var cast = $routeParams.cast;

    wpStaff.success(function(data) {  
        $('#loading').remove();
        var staffMembers = data.posts;
        staffMembers.forEach(function(val,i){
            if(cast == val.slug) {
                $('title').text(val.title + ' | Staff | Improv Comedy Mumbai | India');
                $scope.staffTitle = val.title;
                $scope.staffImg = val.thumbnail_images.full.url;                
                $scope.staffContent = $sce.trustAsHtml(val.content); 
            } 
        });
        $scope.staffMembers = staffMembers;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 



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




app.controller('NewsController', ['$scope','fbFeed','fbEvents','$http','$sce','$location', function($scope,fbFeed,fbEvents, $http, $sce, $location) { 

	var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('News | Improv Comedy Mumbai | India');

    fbFeed.success(function(data){ 

        $scope.fbNews = data.data;
    });

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

 
}]); 



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



app.controller('PhotosLandingController', ['$scope','instagram','fbEvents','$sce','$location', function($scope,instagram,fbEvents,$sce,$location) { 
    
    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location);

    $('title').text('Photos | Improv Comedy Mumbai | India');

    instagram.success(function(data) {
        // console.log(data); 
        var instagram = data.data;

        $scope.instagram = instagram;
    }); 

    fbEvents.success(function(data) { 
        $scope.events = data.data;
    });

    var filter = require('../../dev/js/functions/filter.js');
    filter($scope);
}]); 



app.controller('VideosLandingController', ['$scope','youtube','fbEvents','$sce','$location', function($scope,youtube,fbEvents,$sce,$location) { 
    
    $('title').text('Videos | Improv Comedy Mumbai | India');

    var ga = require('../../dev/js/functions/sendToGoogleAnalytics.js');
    ga($scope, $location); 

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



app.directive('sidebar', function() { 
  return { 
    restrict: 'E', 
    templateUrl: 'js/directives/sidebar.html'
  }; 
});
app.directive('castlist', function() { 
  return { 
    restrict: 'E',
    scope: { 
      info: '=',
      page: '=' 
    },
    templateUrl: 'js/directives/cast-list.html'
    
  }; 
});

app.directive('changeHeight' ,function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
        	if (scope.$last) {
        		var changeHeight = require('../../dev/js/functions/changeHeight.js');
        		changeHeight();
        	}
    	} 
    };
});
app.directive('castpagination', function() { 
  return { 
    restrict: 'E',
    scope: { 
      info: '=',
      page: '=' 
    },
    templateUrl: 'js/directives/cast-pagination.html' 
  }; 
});
},{"../../dev/js/functions/addToObj.js":2,"../../dev/js/functions/changeHeight.js":3,"../../dev/js/functions/changeYear.js":4,"../../dev/js/functions/filter.js":5,"../../dev/js/functions/makeDate.js":6,"../../dev/js/functions/sendToGoogleAnalytics.js":10}],2:[function(require,module,exports){
var makeDate = require('./makeDate.js');
var makeHour = require('./makeHour.js');
var makeMin = require('./makeMin.js');
var makeTime = require('./makeTime.js');

var addToObj = function(name,val,imgSource,i){
    var url = name.replace(/ /g,'-');
    var date = makeDate(val, val.start_time);

    var utc = val.start_time.split('+');
    utc = utc[1];

    var startHour = makeHour(val.start_time);
    var startMin = makeMin(val.start_time);


    var endHour = makeHour(val.end_time);
    var endMin = makeMin(val.end_time);

    var startEvent = makeTime(startHour, startMin, utc);
    var endEvent = makeTime(endHour, endMin, utc); 

    if(name.indexOf('classes') !== -1 || name.indexOf('class') !== -1 || name.indexOf('workshop') !== -1) {
        val.category = 'classes';
    } else {
        val.category = 'shows';
    }
    
    val.img = imgSource;
    val.url = url;
    val.date = date;
    val.startTime = startEvent;
    val.endTime = endEvent;
    val.index = i;
        
};

module.exports = addToObj;
},{"./makeDate.js":6,"./makeHour.js":7,"./makeMin.js":8,"./makeTime.js":9}],3:[function(require,module,exports){
var changeHeight = function(){
	var title = $('.title h3').text();
	if(title == 'cast' || title == 'alumni'){
		var castLi = $('.cast li');
		$(castLi).each(function(i,val){
			setTimeout(function(){
				var name = $(val).find('span').text();
				if(name == 'Yogesh Upadhyaya' || name == 'Cherry Mardia' || name == 'Kaneez Surka Nalwala'){
					var height = $(val).prev().find('img').css('height');
					$(val).find('img').css('height', height);
				}

				if(name == 'Jnanasiddhy Raghavendra' || name == 'Kaneez Surka Nalwala'){
					var spanHeight = $(val).find('span').css('height');
					$('.cast li span').css('height', spanHeight);
				}

			},100);
		});

	}
};

module.exports = changeHeight; 
},{}],4:[function(require,module,exports){

var thisYearFn = function(elem){
	var thisYear = new Date();
	thisYear = thisYear.getFullYear();
	$(elem).html(thisYear);
};

module.exports = thisYearFn;
},{}],5:[function(require,module,exports){
var filter = function($scope){
	$scope.filter = function(val){
        if($scope.title == 'shows'){
            if(val.category == 'shows'){
                return val;
            }
        } else if($scope.title == 'classes'){
            if(val.category == 'classes'){
                return val;
            }
        }
    };
};

module.exports = filter;
},{}],6:[function(require,module,exports){
var makeDate = function(val, obj) {
    var arr = obj.split('T');
    arr = arr[0].split('-');
    var date = new Date(arr[0], arr[1]-1, arr[2]);
    var month = date.getMonth();
    var day = date.getDate();
    var weekday = date.getDay();
    var weekArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    val.day = weekArr[weekday];
    var monthArr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    return monthArr[month] + ' ' + day;
};

module.exports = makeDate;
},{}],7:[function(require,module,exports){
var makeHour = function(time){
    if(time !== undefined){
        var startTime = time.split('T');
        var eventStartTime = startTime[1].split('+');
        eventStartTime = eventStartTime[0];
        var timer = eventStartTime.split(':');
        var hour = timer[0];
        return hour;
    }
};

module.exports = makeHour;
},{}],8:[function(require,module,exports){
var makeMin = function(time){
    if(time !== undefined) {
        var startTime = time.split('T');
        var eventStartTime = startTime[1].split('+');
        eventStartTime = eventStartTime[0];
        var timer = eventStartTime.split(':');
        var min = timer[1];
        return min;
    }
};

module.exports = makeMin;
},{}],9:[function(require,module,exports){
var makeTime = function(hour, min, utc){
    var eventTime;
    if(hour < 12) {
        eventTime = hour + ':' + min + 'am';
    } else {
        switch(hour) {
            case '12':
                eventTime = '12' + ':' + min + 'pm';
                break;
            case '13':
                eventTime = '1' + ':' + min + 'pm';
                break;
            case '14':
                eventTime = '2' + ':' + min + 'pm';
                break;
            case '15':
                eventTime = '3' + ':' + min + 'pm';
                break;
            case '16':
                eventTime = '4' + ':' + min + 'pm';
                break;
            case '17':
                eventTime = '5' + ':' + min + 'pm';
                break;
            case '18':
                eventTime = '6' + ':' + min + 'pm';
                break;
            case '19':
                eventTime = '7' + ':' + min + 'pm';
                break;
            case '20':
                eventTime = '8' + ':' + min + 'pm';
                break;
            case '21':
                eventTime = '9' + ':' + min + 'pm';
                break;
            case '22':
                eventTime = '10' + ':' + min + 'pm';
                break;
            case '23':
                eventTime = '11' + ':' + min + 'pm';
                break;
            case '24':
                eventTime = '12' + ':' + min + 'am';
                break;
        }
        return eventTime;
    }
};

module.exports = makeTime; 
},{}],10:[function(require,module,exports){

module.exports = function($scope, $location){

    $scope.$on('$locationChangeSuccess',function(){
    	
    	var url = $location.url();
    	ga('set', 'page', url);
    	ga('send', 'pageview');

    });

    // console.log('the google analytics file');
      	
}; 
},{}]},{},[1]);
