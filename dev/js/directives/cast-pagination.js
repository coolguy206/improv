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