var gulp = require ( 'gulp' );
var sass = require ( 'gulp-sass' );
var notify = require ( 'gulp-notify' );


// Here we define the list of things to happen when we run gulp styles
gulp.task( 'styles', function() {
	gulp.src( 'wp-content/themes/theme-hackeryou/style.scss' )
	.pipe( sass())
	.pipe( gulp.dest('wp-content/themes/theme-hackeryou/' ))
	.pipe( notify ( 'CSS Compiled' ));
	});

gulp.task( 'watch', function() {
	gulp.watch('wp-content/themes/theme-hackeryou/style.scss',['styles'])
	});