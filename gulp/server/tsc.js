const exec = require('child_process').exec,
  notifier = require('node-notifier');


function stdout(folder, data, callbackRef) {
  console.log(`tsc ${folder} stdout: ${data}`);

  if (data.indexOf('error') > -1) {
    notifier.notify('Typescript Error');
  }

  if (!callbackRef.callback) return;
  callbackRef.callback();
  callbackRef.callback = null;
}

function stderr(folder, data) {
  console.log(`tsc ${folder} stderr: ${data}`);
}

function exit(folder, code) {
  console.log(`tsc  ${folder} exited with code: ${code}`);
}

module.exports = function(folder, watch, callback) {
  var callbackRef = { callback };
  const tsc = exec(`node ./node_modules/typescript/bin/tsc -p ${folder} ${watch ? '-w --sourceMap' : ''}`);
  tsc.stdout.on('data', data => stdout(folder, data, callbackRef));
  tsc.stderr.on('data', data => stderr(folder, data));
  tsc.on('exit', code => exit(folder, code));
};

