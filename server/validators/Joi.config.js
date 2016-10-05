const Joi = require('joi'),
  phoneValidator = require('phone');

function isEmpty(value) {
  return value === null || value === undefined || value === '';
}

module.exports = Joi.extend({
  base: Joi.string(),
  name: 'string',
  language: {
    phone: 'invalid phone number format'
  },
  rules: [{
    name: 'phone',
    validate(params, value, state, options) {
      if (isEmpty(value)) return value;
      value = value.replace(/\D/g, '');

      if (phoneValidator(value, 'BRA').length === 0) {
        return this.createError('string.phone', { v: value }, state, options);
      }

      return value;
    }
  }]
});
