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
