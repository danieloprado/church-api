const Joi = require('./Joi.config');

const schema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  title: Joi.string().required().min(3).max(100),
  date: Joi.date().required(),
  message: Joi.string().required().min(3),
  typeId: Joi.number().integer().min(1)
});

module.exports = model => new Promise((resolve, reject) => {
  Joi.validate(model, schema, { abortEarly: false, stripUnknown: true }, (err, value) => {
    if (err) reject({ validationError: true, message: err.details });
    resolve(value);
  });

});
