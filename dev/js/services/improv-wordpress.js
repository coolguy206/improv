
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