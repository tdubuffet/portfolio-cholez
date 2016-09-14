var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    exec = require('child_process').exec,
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify');

function swallowError (error) {

    console.log(error.toString())

    this.emit('end')
}

gulp.task('sass-dev', function () {

    gulp.src('./asset/sass/master.scss')
        .pipe(sass({sourceComments: 'map'}))
        .on('error', swallowError)
        .pipe(gulp.dest('./asset/compiled/'));
});

gulp.task('sass-prod', function () {

    gulp.src('./asset/sass/master.scss')
        .pipe(sass({sourceComments: 'map'}))
        .pipe(cleanCSS({compatibility: 'ie8', processImportFrom: ['!fonts.googleapis.com']}))
        .on('error', swallowError)
        .pipe(gulp.dest('./asset/compiled/'));
});

var livereload = require('gulp-livereload');

gulp.task('watch', function () {
    var onChange = function (event) {
        console.log('File '+event.path+' has been '+event.type);

        gulp.task('reload', ['sass-dev']);

        // Tell LiveReload to reload the window
        livereload.changed(event.path);
    };
    // Starts the server
    livereload.listen();
    gulp.watch('./asset/sass/*.scss', ['sass-dev'])
        .on('change', onChange);
});

gulp.task('default', ['sass-dev']);

gulp.task('dev', ['sass-dev']);

gulp.task('prod', ['sass-prod']);
