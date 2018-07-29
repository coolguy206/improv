module.exports = function(grunt) {

  // Default task(s).
  grunt.registerTask('hello', 
    function(){
      console.log('hello world from Grunt!');
    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');

    // Project configuration.
  grunt.initConfig({
  	watch: {
  		options:{livereload: true},	
  		css: {
  			files: ['dev/**/*.less'],
  			tasks: ['less','csslint','cssmin'],
  		},
  		html:{
  			files:['dev/**/*.html'],
  			tasks:['copy:views','copy:index','copy:directives']
  		},
      js: {
        files: ['dev/**/*.js'],
        tasks: ['jshint','concat','browserify']
      },
 
  	},

    csslint: {
      css: {
        src:['build/css/improv-styles.css']
      }
    },

  	cssmin:{
  		improvStyles:{
  			files:{
  				'build/css/improv-styles.min.css': 'build/css/improv-styles.css'
  			}
  		},

  	},

  	less:{
  		improvStyles:{
  			files:{
  				'build/css/improv-styles.css': 'dev/css/improv-styles.less'
  			}
  		},

  	},

    browserify: {
      dev: {
        src:['build/js/improv.js'],
        dest:'build/js/improv.js'
      }
    },

    concat: {
      // js: {
      //   src:['dev/js/app.js',/*'dev/js/routes/routes.js',*/'dev/js/services/facebook.js','dev/js/controllers/main.js','dev/js/controllers/shows.js'],
      //   dest: 'dev/js/improv.js'
      // },

      js2: {
        src:['dev/js/app.js','dev/js/functions/windowResize.js','dev/js/functions/offCanvas.js','dev/js/controllers/home.js','dev/js/routes/routes.js','dev/js/services/facebook.js','dev/js/services/improv-wordpress.js','dev/js/services/instagram.js','dev/js/services/youtube.js','dev/js/controllers/shows-classes.js','dev/js/controllers/details.js','dev/js/controllers/cast.js','dev/js/controllers/alumni.js','dev/js/controllers/staff.js','dev/js/controllers/cast-details.js','dev/js/controllers/alumni-details.js','dev/js/controllers/staff-details.js','dev/js/controllers/gallery.js','dev/js/controllers/photos.js','dev/js/controllers/videos.js','dev/js/controllers/about.js','dev/js/controllers/hire-us.js','dev/js/controllers/news.js','dev/js/controllers/press.js','dev/js/controllers/photos-landing-page.js','dev/js/controllers/videos-landing-page.js','dev/js/directives/sidebar.js','dev/js/directives/cast-list.js','dev/js/directives/cast-pagination.js'],
        dest: 'build/js/improv.js'
      },

    },

    copy: {

      lib: {
        files: [
          {expand:true, cwd: 'bower_components/angular-route', src:['angular-route.min.js'], dest: 'build/js/lib'},
          {expand:true, cwd: 'bower_components/', src:['bootstrap/**'], dest: 'build/css/lib'},
          {expand:true, cwd: 'bower_components/', src:['font-awesome/**'], dest: 'build/css/lib'},
          {expand: true, cwd: 'bower_components/', src: ['animate.css/**'], dest: 'build/css/lib'},
          {expand: true, cwd: 'bower_components/', src: ['jQuery/**'], dest: 'build/js/lib'},
          {expand: true, cwd: 'bower_components/', src: ['angular/**'], dest: 'build/js/lib'},
          {expand: true, cwd: 'bower_components/', src: ['angular-route/**'], dest: 'build/js/lib'},
        ]
      },

      views: {
        files: [
          {expand:true, cwd: 'dev/', src:['views/**'], dest: 'build/'}
        ]
      },

      directives: {
        files: [
          {expand:true, cwd: 'dev/js/directives', src:['**.html'], dest: 'build/js/directives'}
        ]
      },

      index: {
        files: [
          {expand:true, cwd: 'dev/', src:['index.html'], dest: 'build/'}
        ]
      },

    },

    htmlmin:{
      dev: {
        options: {
          removeComments:true,
          collapseWhitespace:true
        },
        files: {
          // 'build/home.html':'build/home.html',
    
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'dev/**/*.js']
    },

    uglify:{
      dev:{
        files:{
          'build/js/improv.min.js':['dev/js/improv.js']
        }
      },
    },

    connect:{
      improv: {
        options: {
          keepalive: true,
          port: 8080,
          livereload: true
        }  
      }
    },

    nodemon: {
      dev: {
        script: 'makeFile.js'
      }
    },

    concurrent: {
      dev: {
        target1: ['watch'],
        target2: ['connect']
      }
    }

  });

};