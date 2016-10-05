const Joi = require('./Joi.config');

const schema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  title: Joi.string().required().min(3).max(100),
  description: Joi.string().max(1000),
  beginDate: Joi.date().required(),
  endDate: Joi.date().required().min(Joi.ref('beginDate'))
});

module.exports = model => new Promise((resolve, reject) => {
  Joi.validate(model, schema, { abortEarly: false, stripUnknown: true }, (err, value) => {
    if (err) reject({ validationError: true, message: err.details });
    resolve(value);
  });
});
