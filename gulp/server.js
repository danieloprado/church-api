const gulp = require('gulp'),
  rimraf = require('rimraf'),
  notifier = require('node-notifier'),
  nodemon = require('gulp-nodemon');

const serverPath = { src: 'server', dist: 'bin' };

gulp.task('server-clean', callback => {
  rimraf(`${serverPath.dist}/**/*`, callback);
});

gulp.task('server-develop', () => {
  return nodemon({
    script: 'server/main.js',
    ext: 'js',
    watch: ['server/**/*.js', 'knexfile.js'],
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
