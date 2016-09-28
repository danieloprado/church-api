const gulp = require('gulp'),
  rimraf = require('rimraf');

const appPath = { src: 'app', dist: 'bin/www' };

gulp.task('app-clean', cb => {
  rimraf(`${appPath.dist}/**/*`, cb);
});
