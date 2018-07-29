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