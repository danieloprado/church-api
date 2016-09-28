const gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  exec = require('child_process').exec;

const serverPath = { src: 'server', dist: 'bin' };

function execTsc(folder, watch, cb) {
  const tsc = exec(`node ./node_modules/typescript/bin/tsc -p ${folder} ${watch ? '-w --sourceMap' : ''}`, cb);
  tsc.stdout.on('data', data => console.log(`tsc ${folder} stdout: ${data}`));
  tsc.stderr.on('data', data => console.log(`tsc ${folder} stderr: ${data}`));
  tsc.on('exit', code => console.log(`tsc  ${folder} exited with code: ${code}`));
  cb();
}

gulp.task('server', cb => {
  execTsc(serverPath.src, false, cb);
});

gulp.task('server-watch', cb => {
  execTsc(serverPath.src, true, cb);
});

gulp.task('develop', ['server-watch'], () => {
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

gulp.task('clean-app', cb => rimraf(`${serverPath.dist}/**/*`, cb));
gulp.task('clean', gulp.parallel('clean-app'), cb => rimraf(`${appPath.dist}/**/*`, cb));

gulp.task('default', ['develop']);
