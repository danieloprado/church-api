const gulp = require('gulp'),
  rimraf = require('rimraf'),
  sequence = require('gulp-sequence'),
  notifier = require('node-notifier'),

  paths = require('./paths');


require('./libs');
require('./scripts');
require('./style');
require('./views');

gulp.task('app-watch', () => {
  const startAndNotify = (tasks) => {
    return () => gulp.start(tasks, () => {
      notifier.notify(`${tasks.join(', ').toUpperCase()} Completed`);
    });
  };

  gulp.watch('App/**/*.scss', startAndNotify(['app-theme']));
  gulp.watch('App/**/*.pug', startAndNotify(['app-views']));
  gulp.watch(paths.js, startAndNotify(['app-js']));
});

gulp.task('app-compile', (cb) => {
  sequence('app-clean', ['app-libs', 'app-views', 'app-theme', 'app-js'], () => {
    notifier.notify('Compile Completed');
    cb();
  });
});

gulp.task('app-develop', ['app-compile', 'app-watch']);
gulp.task('app-clean', cb => rimraf(`${paths.dist}/**/*`, cb));
