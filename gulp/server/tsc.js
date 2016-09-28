const exec = require('child_process').exec;

module.exports = function(folder, watch, cb) {
  const tsc = exec(`node ./node_modules/typescript/bin/tsc -p ${folder} ${watch ? '-w --sourceMap' : ''}`, cb);
  tsc.stdout.on('data', data => {
    console.log(`tsc ${folder} stdout: ${data}`);

    if (cb) {
      cb();
      cb = null;
    }
  });
  tsc.stderr.on('data', data => console.log(`tsc ${folder} stderr: ${data}`));
  tsc.on('exit', code => console.log(`tsc  ${folder} exited with code: ${code}`));
};
