module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: '/*! <%= pkg.name %> <%= pkg.version %> - <%= pkg.description %> | Author: <%= pkg.author %>, <%= grunt.template.today("yyyy") %> | License: <%= pkg.license %> */\n'
		},

		browserify: {
			options: {
				bundleOptions: {
					standalone: 'sortMediaQueries'
				}
			},
			dist: {
				files: {
					'src/out/sortMediaQueries.js': ['src/sortMediaQueries.js']
				}
			},
			test: {
				files: {
					'test/out/test.js': ['test/test.js']
				}
			},
			watch: {
				options: {
					watch: true,
					keepAlive: true
				},
				files: {
					'src/out/sortMediaQueries.js': ['src/sortMediaQueries.js']
				}
			}
		},

		concat: {
			dist: {
				options: {
					stripBanners: true,
					banner: '<%= meta.banner %>'
				},
				files: {
					'dist/sortMediaQueries.js': ['src/out/sortMediaQueries.js']
				}
			}
		},

		uglify: {
			dist: {
				options: {
					banner: '<%= meta.banner %>'
				},
				files: {
					'dist/sortMediaQueries.min.js': ['src/out/sortMediaQueries.js']
				}
			}
		},

		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: ['pkg'],
				commit: true,
				commitMessage: 'Release %VERSION%',
				commitFiles: ['-a'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: '',
				push: false
			}
		},

		jscs: {
			main: {
				options: {
					config: '.jscsrc'
				},
				files: {
					src: [
						'src/**/*.js',
						'!src/out/**/*.js'
					]
				}
			}
		},

		jshint: {
			main: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'src/**/*.js',
					'!src/out/**/*.js'
				]
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},

		mochaTest: {
			unit: {
				options: {
					reporter: 'spec'
				},
				src: ['test/test.js']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('stylecheck', ['jshint:main', 'jscs:main']);
	grunt.registerTask('default', ['stylecheck','browserify:dist','concat:dist', 'uglify:dist']);
	grunt.registerTask('watch', ['browserify:watch']);
	grunt.registerTask('test', ['browserify:test','mochaTest:unit','karma:unit']);
	grunt.registerTask('releasePatch', ['bump-only:patch', 'default', 'bump-commit']);
	grunt.registerTask('releaseMinor', ['bump-only:minor', 'default', 'bump-commit']);
	grunt.registerTask('releaseMajor', ['bump-only:major', 'default', 'bump-commit']);

};
