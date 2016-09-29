// import * as _ from 'lodash';

// const _ = require('lodash'),
//   jwt = require('jsonwebtoken'),
//   config = require('config');

// function allowCors(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//   res.header('Access-Control-Expose-Headers', 'X-Token');
//   next();
// }

// function bindUser(req, res, next) {
//   const token = req.get('Authorization');
//   if (!token) return next();
//   jwt.verify(token.split(' ')[1], config.jwtSecret, (err, decoded) => {
//     if (!decoded) return next();
//     req.user = decoded;
//     next();
//   });
// }

// function notFound(req, res, next) {
//   var err = new Error("not found");
//   err.status = 404;
//   next(err);
// }

// function validationErrors(err, req, res, next) {
//   if (err.validationError) {
//     console.log(err.message);
//     return res.status(400).json(err.message);
//   }
//   next(err);
// }

// function developmentError(err, req, res, next) {
//   console.error(err.status || 500);
//   console.error(err.message);
//   console.error(err.stack);
//   if (typeof err == 'string') {
//     err = { message: err };
//   }
//   res.status(err.status || 500).send({
//     message: err.message,
//     stack: err.stack
//   });
// }

// function productionError(err, req, res, next) {
//   res.status(err.status || 500).render('error', {
//     message: err.message,
//     error: {}
//   });
// }

// module.exports = {
//   allowCors,
//   bindUser,
//   notFound,
//   validationErrors,
//   developmentError,
//   productionError
// };
