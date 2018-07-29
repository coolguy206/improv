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
