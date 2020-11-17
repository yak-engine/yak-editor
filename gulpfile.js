var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var cleanCss = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('compile-sass', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'compressed', errLogToConsole: true }))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['./**/*.scss'], gulp.series('compile-sass'));
});
