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