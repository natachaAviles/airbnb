var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(){

	gulp.src('src/js/*.js')
		// verificar errores de JS
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// unir todos los archivos
		.pipe(concat('script.min.js'))
		// enfearlo (minimizarlo)
		.pipe(uglify())
		// dejarlo en carpeta dist/js
		.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function(){
	// aca va la tarea
	gulp.src('src/sass/main.scss')
		// transformar los sass
		.pipe(sass().on('error', sass.logError))
		// minimizarlo
		.pipe(minifyCSS())
		// dejarlo en archivo de destino
		.pipe(concat('estilos.min.css'))
		// dejarlo en carpeta dist/css
		.pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['script', 'style', 'fonts']);