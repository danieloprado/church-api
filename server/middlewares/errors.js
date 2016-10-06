function notFound(req, res, next) { //jshint ignore: line
  return res.status(404).json('Not Found');
}

function parser(err, req, res, next) {
  if (err.validationError) {
    return res.status(400).json(err.message);
  }

  switch (err.message) {
    case 'not-found':
      err.status = 404;
      break;
    case 'access-denied':
      err.status = 403;
      break;
  }

  next(err);
}

function developmentError(err, req, res, next) { //jshint ignore: line
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

function productionError(err, req, res, next) { //jshint ignore: line
  res.status(err.status || 500).render('error', {
    message: err.message,
    error: {}
  });
}

module.exports = {
  notFound,
  parser,
  developmentError,
  productionError
};
