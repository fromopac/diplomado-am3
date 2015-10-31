/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('source/*.js')
		.pipe(concat('lab1.min.js'))		//concatene en un solo archivo
		.pipe(uglify())						//convierta en una sola linea 
		.pipe(gulp.dest('build/'))
});