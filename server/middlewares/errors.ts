import * as express from 'express';

export function notFound(req: express.Request, res: express.Response, next: express.NextFunction) {
  const err: any = new Error("not found");
  err.status = 404;
  next(err);
}

export function validationErrors(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  if (err.validationError) {
    console.log(err.message);
    return res.status(400).json(err.message);
  }
  next(err);
}

export function developmentError(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.error(err.status || 500);
  console.error(err.message);
  console.error(err.stack);
  if (typeof err === 'string') {
    err = { message: err };
  }
  res.status(err.status || 500).send({
    message: err.message,
    stack: err.stack
  });
}

export function productionError(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500).render('error', {
    message: err.message,
    error: {}
  });
}
