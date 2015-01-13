module.exports = function(grunt){
// Project configuration.
grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/1.js', 'js/2.js'],
      dest: 'build/scripts.js',
    },
  },
});	

grunt.loadNpmTasks('grunt-contrib-concat');
};