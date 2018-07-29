
module.exports = function($scope, $location){

    $scope.$on('$locationChangeSuccess',function(){
    	
    	var url = $location.url();
    	ga('set', 'page', url);
    	ga('send', 'pageview');

    });

    // console.log('the google analytics file');
      	
}; 