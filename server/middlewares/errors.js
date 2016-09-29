function notFound(req, res, next) {
  var err = new Error("not found");
  err.status = 404;
  next(err);
}

function validationErrors(err, req, res, next) {
  if (err.validationError) {
    console.log(err.message);
    return res.status(400).json(err.message);
  }
  next(err);
}

function developmentError(err, req, res, next) {
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

function productionError(err, req, res, next) {
  res.status(err.status || 500).render('error', {
    message: err.message,
    error: {}
  });
}

module.exports = {
  notFound,
  validationErrors,
  developmentError,
  productionError
};
