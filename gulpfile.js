var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var uglify = require('gulp-uglifyjs');
var streamify = require('gulp-streamify');

gulp.task('connect', function(){
	connect.server({
		root: './',
		port: '3000',
		livereload: true,
		host: 'localhost'
	});
});


gulp.task('bundle', function(){
	return browserify({entries: './src/js/index.js', extensions: ['jsx'], debug: true})
		.transform(babelify,{
			presets: ['es2015','stage-0','react']
		})
		.transform(require('browserify-shim'))
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	var watcher = gulp.watch(['./src/js/*.js','./src/js/*/*.js'],['bundle']);
	watcher.on('change', function(event){
		console.log(event.path + ' was ' + event.type + ', bundle again...');
	});
});

gulp.task('default',['bundle','connect','watch']);