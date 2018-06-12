'use strict';

const Joi = require('joi');
const debug = require('debug')('app:joiValidate');

module.exports = joiOptions => {
  return async (ctx, next) => {
    const { options } = joiOptions;
    ctx.validateJoi = schema => {
      if (!schema) return next();
      const toValidate = {};
      // params body query
      [ 'params', 'body', 'query' ].forEach(key => {
        if (key === 'body' && schema[key]) {
          toValidate[key] = ctx.request[key]; // body
        } else if (schema[key]) {
          toValidate[key] = ctx[key];
        }
      });
      const { error } = Joi.validate(toValidate, schema, options);
      if (error) {
        const details = error.details || [];
        const failures = {};
        for (const detail of details) {
          failures[detail.path.join('.')] = detail.message;
          // failures.push({
          //   filed: detail.path.join('.'),
          //   message: detail.message,
          // });
        }
        debug(failures);
        // throw new Error(JSON.stringify(failures));
        return failures;
      }
    };
    await next();
  };
};
