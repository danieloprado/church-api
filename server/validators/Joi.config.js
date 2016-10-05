const Joi = require('joi');

// function isEmpty(value) {
//   return value === null || value === undefined || value === "";
// }

module.exports = Joi.extend({
  base: Joi.string(),
  name: 'string',
  language: {

  },
  rules: []
});
