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