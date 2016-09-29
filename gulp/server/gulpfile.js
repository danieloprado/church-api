const gulp = require('gulp'),
  rimraf = require('rimraf'),
  notifier = require('node-notifier'),
  nodemon = require('gulp-nodemon'),
  tsc = require('./tsc');

const serverPath = { src: 'server', dist: 'bin' };

gulp.task('server-clean', callback => {
  rimraf(`${serverPath.dist}/**/*`, callback);
});

gulp.task('server-compile', callback => {
  tsc(serverPath.src, false, callback);
});

gulp.task('server-watch', callback => {
  tsc(serverPath.src, true, callback);
});

gulp.task('server-develop', ['server-watch'], () => {
  nodemon({
    script: 'bin/main.js',
    ext: 'js',
    ignore: ['gulp/**/*', 'server/**/*', 'app/**/*'],
    stdout: false,
    env: {
      'NODE_ENV': 'development',
      'PORT': 3000
    }
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      notifier.notify('Server restarted');

      if (/^Express server listening on port/.test(chunk)) {
        //livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});
