var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


gulp.task('concat-css', function(){					//tarea concatenar 
    return gulp.src(['css/styles.css'])				//lo que va a concatenar
        .pipe(concatCss('styles.css'))				//nombre 
        .pipe(gulp.dest('css/source'));				//directorio donde quedara guardado
});

gulp.task('minify-css', function(){	//minificar y despues concatenar
  return gulp.src('css/source/styles.css')			//que va a minimicar
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))					//coloca el sufijo
    .pipe(gulp.dest('css/min'));					//donde qudara guardado
});	

gulp.task('concat-files', ['concat-css' , 'minify-css'], function(){
	gulp.src('js/*.js')
		.pipe(concat('lab3.min.js'))		//concatene en un solo archivo
		.pipe(uglify())						//convierta en una sola linea 
		.pipe(gulp.dest('js/build/'))
});

var htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});