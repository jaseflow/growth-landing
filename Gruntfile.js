

module.exports = function(grunt) {
    var envToUse = grunt.option('env') || 'production';
    var env = require('./_environments/' + envToUse + '.js');
    var s3 = require('./_config/s3.js');
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        releaseDirectory: 'releases/<%= pkg.version %>-' + envToUse,

        stylus: {
            options: {
                "include css": true
            },
            compile: {
                files: {
                    'public/css/styles.css': 'styles/styles.styl',
                    'public/css/admin.css': 'styles/admin.styl'
                }
            }
        },

        clean: {
            release : ['<%= releaseDirectory %>/']
        },

        copy: {
            release: {
                expand: true,
                cwd: 'public',
                src: '**',
                dest: '<%= releaseDirectory %>/'
            } 
        },

        autoprefixer: {
            options: {},
            no_dest: {
                src: 'public/css/styles.css'
            }
        },

        watch: {
            stylus: {
                files: ['styles/**/*.styl'],
                tasks: ['stylus']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'public/css/styles.css',
                    'public/index.html',
                    'public/confirmation.html',
                    'public/register.html',
                    'public/login.html',
                    'public/admin.html',
                    'public/admin-add.html',
                    'public/admin-added.html',
                ]
            }
        },

        aws_s3: {
            release: {
                options: {
                    accessKeyId: s3.accessKeyId, // Use the variables
                    secretAccessKey: s3.secretAccessKey, // You can also use env variables
                    region: env.s3.region,
                    bucket: env.s3.bucket,
                    uploadConcurrency: 5, // 5 simultaneous uploads
                    downloadConcurrency: 5, // 5 simultaneous downloads
                },
                files: [
                    {
                        expand: true, 
                        dest: '.', 
                        cwd: '<%= releaseDirectory %>/', 
                        src: ['**'], 
                        action: 'upload',
                        differential: true
                    },
                    { 
                        dest: '/', 
                        cwd: '<%= releaseDirectory %>/', 
                        action: 'delete',
                        differential: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus'); 
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['stylus','autoprefixer']);
    grunt.registerTask('server', ['connect','watch']);
    grunt.registerTask('deploy',
        [
            'autoprefixer',
            'clean:release',
            'copy:release',
            'aws_s3:release'
        ]
    );
    }
