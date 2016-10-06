const gulp = require('gulp'),
  rimraf = require('rimraf'),
  notifier = require('node-notifier'),
  jshint = require('gulp-jshint'),
  notify = require('gulp-notify'),
  nodemon = require('gulp-nodemon');

const serverPath = { src: 'server', dist: 'bin' };

gulp.task('server-clean', callback => {
  rimraf(`${serverPath.dist}/**/*`, callback);
});

gulp.task('server-jshint', () => {
  return gulp.src(`${serverPath.src}/**/*.js`)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError('Server JSHint error'));
});

gulp.task('server-develop', ['server-jshint'], () => {
  return nodemon({
    script: 'server/main.js',
    ext: 'js',
    watch: ['server/**/*.js', 'knexfile.js'],
    tasks: ['server-jshint'],
    stdout: true,
    env: {
      'NODE_ENV': 'development',
      'NODE_PORT': 3000
    }
  }).on('readable', () => {
    this.stdout.on('data', chunk => {
      notifier.notify('Server restarted');

      if (/^Express server listening on port/.test(chunk)) {
        //livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  }).on('crash', () => notifier.notify('Server error'));
});
