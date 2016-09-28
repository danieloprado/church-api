const gulp = require('gulp');

require('./app/gulpfile');
require('./server/gulpfile');

gulp.task('clean', ['app-clean', 'server-clean']);
gulp.task('develop', ['server-develop']);
gulp.task('default', ['develop']);
