const gulp = require('gulp');

require('./app');
require('./server');

gulp.task('clean', ['app-clean', 'server-clean']);
gulp.task('develop', ['server-develop']);
gulp.task('default', ['develop']);

