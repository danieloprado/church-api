const gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  notify = require('gulp-notify'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  paths = require('./paths');

gulp.task('app-js:hint', () => {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError('JSHint error'));
});

gulp.task('app-js', ['app-js:hint'], () => {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(paths.dist + 'js'))
    .on('error', notify.onError('JS error'));
});
