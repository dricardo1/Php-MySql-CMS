module.exports = function(grunt){
// Project configuration.
grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    js: {
      src: ['js/1.js', 'js/2.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
      src: ['css/main.css', 'css/theme.css'],
      dest: 'build/css/styles.css',
    },
  },
  watch: {
 js: {
    files: ['js/**/*.js'],
    tasks: ['concat'],
    },
 css: {
    files: ['css/**/*.css'],
    tasks: ['concat'],
    },
},
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'build/js/scripts.js': ['js/1.js', 'js/2.js']
      }
    }
  }
});	
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
};