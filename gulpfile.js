'use strict';

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');

gulp.task('connect', function() {
	connect.server({
		root : 'public',
		livereload : true	
	});
});

gulp.task('html', function(){
	gulp.src('public/*html')
		.pipe(connect.reload());
});

gulp.task('sass', function(){
	gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/css'))
});

/*Watchs*/
gulp.task('watch', function(){
	gulp.watch(['public/**/*html', 'public/scripts/*.js'], ['html']);
	gulp.watch('sass/*.scss', ['sass']);
});

/*End Watchs*/

gulp.task('default', ['connect', 'watch']);