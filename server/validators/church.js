const Joi = require('./Joi.config');

const schema = Joi.object().keys({
  name: Joi.string().required().min(3).max(100),
  email: Joi.string().email().max(150),
  phone: Joi.string().max(20).phone(),
  adress: Joi.string().max(100)
});

module.exports = model => new Promise((resolve, reject) => {
  Joi.validate(model, schema, { abortEarly: false, stripUnknown: true }, (err, value) => {
    if (err) reject({ validationError: true, message: err.details });
    resolve(value);
  });
});
