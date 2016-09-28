const gulp = require('gulp'),
  rimraf = require('rimraf'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  tsc = require('./tsc');

const serverPath = { src: 'server', dist: 'bin' };

gulp.task('server-clean', cb => {
  rimraf(`${serverPath.dist}/**/*`, cb);
});

gulp.task('server-compile', cb => {
  tsc(serverPath.src, false, cb);
});

gulp.task('server-watch', cb => {
  tsc(serverPath.src, true, cb);
});

gulp.task('server-develop', ['server-watch'], () => {
  livereload.listen();
  nodemon({
    script: 'bin/main.js',
    ext: 'js',
    stdout: false,
    env: {
      'NODE_ENV': 'development'
    }
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});
