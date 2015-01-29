module.exports = function(grunt) {
  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec',
        ui: 'bdd',
        timeout: 20000
      },
      src: ['test/**/*.test.js']
    }
  });
  grunt.loadNpmTasks('grunt-mocha-test');
};
