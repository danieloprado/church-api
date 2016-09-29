const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  notify = require('gulp-notify'),
  paths = require('./paths');

gulp.task('app-theme', () => {
  return gulp.src(paths.theme)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', notify.onError({
      message: 'Error: <%= error.message %>',
      title: 'Style Error'
    })))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(paths.dist + 'css'));
});
