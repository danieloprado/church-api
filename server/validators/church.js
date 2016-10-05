const Joi = require('./Joi.config');

const schema = Joi.object().keys({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().max(150).allow(null),
  phone: Joi.string().max(20).phone().allow(null),
  address: Joi.string().max(100).allow(null),
  latitude: Joi.number().allow(null),
  longitude: Joi.number().allow(null)
});

module.exports = model => new Promise((resolve, reject) => {
  Joi.validate(model, schema, { abortEarly: false, stripUnknown: true }, (err, value) => {
    if (err) reject({ validationError: true, message: err.details });
    resolve(value);
  });
});
