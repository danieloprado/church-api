import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as config from '../config';

export function bindUser(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = req.get('Authorization');
  if (!token) return next();

  jwt.verify(token.split(' ')[1], config.jwtSecret, (err: any, decoded: any) => {
    if (!decoded) return next();
    //req.user = decoded;
    next();
  });
};
