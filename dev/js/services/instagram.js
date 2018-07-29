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