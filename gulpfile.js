var gulp    = require('gulp');
var path    = require('path');
var plumber = require('gulp-plumber');
var watch   = require('gulp-watch');
var scss    = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;

gulp.task('scss', function() {
  gulp.src('./scss/main.scss')
    .pipe(plumber())
    .pipe(scss({
      includePaths: bourbon,
      outputStyle: 'compressed' //'nested'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
  gulp.watch('./scss/**/*.scss', ['scss']);
});