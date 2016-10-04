const authService = require('services/auth');
import * as express from 'express';


export async function login(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
  try {
    var token = await authService.login(req.body.email, req.body.password);
    res.json(token);
  } catch (err) {

    switch (err.message) {
      case 'user-not-found':
      case 'invalid-password':
        return res.status(400).send();
      default:
        return next(err);
    }

  }
};
