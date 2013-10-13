module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            main: {

                src: [
                    'src/vintjs.js',
                    'src/location.js',
                    'src/route.js',
                    'src/template.js',
                    'src/directive.js',
                    'src/directive/*.js',
                    'src/extra/*.js'
                ],
                dest: 'Vintjs.js'
            },
            test: {

                src: [
                    'test/cases/*.js',
                    'test/cases/*/*.js'
                ],
                dest: 'test/test.js'
            }

        },
        uglify: {
            build: {
                options: { livereload: true },
                src: 'Vintjs.js',
                dest: 'Vintjs.min.js'
            }
        },
        watch: {
            src: {
                files: ['src/*.js', 'src/*/*.js', 'test/cases/*.js', 'test/cases/*/*.js'],
                tasks: ['development']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
    grunt.registerTask('development', ['concat', 'watch']);

};