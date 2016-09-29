const gulp = require('gulp'),
  pug = require('gulp-pug'),
  notify = require('gulp-notify'),
  replace = require('gulp-replace'),
  templateCache = require('gulp-angular-templatecache'),
  paths = require('./paths');

gulp.task('app-views:index', () => {
  return gulp.src(paths.viewIndex)
    .pipe(pug({ pretty: false }).on('error', notify.onError({
      message: 'Error: <%= error.message %>',
      title: 'VIEWS INDEX Error'
    })))
    .pipe(replace('@NOW', new Date() * 1))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('app-views', ['app-views:index'], () => {
  return gulp.src(paths.views)
    .pipe(pug({ pretty: false }).on('error', notify.onError({
      message: 'Error: <%= error.message %>',
      title: 'VIEWS Error'
    })))
    .pipe(replace('@NOW', new Date() * 1))
    .pipe(templateCache('templates.min.js', { module: 'app', root: '/views' }))
    .pipe(gulp.dest(paths.dist + '/js'));
});
