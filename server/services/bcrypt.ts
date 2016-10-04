const bcrypt = require('bcrypt-nodejs'),
  config = require('../config');

export function hash(password: string): Promise<string> {
  return new Promise((resolve, reject) => {

    bcrypt.genSalt(config.bcryptSaltFactor, (err: any, salt: any) => {
      if (err) return reject(err);

      bcrypt.hash(password, salt, null, (err: any, hash: string) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });

  });
}

export function compare(hash: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {

    bcrypt.compare(password, hash, (err: any, isMatch: any) => {
      if (err || !isMatch) {
        return reject(new Error(err || 'bcript-invalid'));
      }

      resolve();
    });

  });
}
