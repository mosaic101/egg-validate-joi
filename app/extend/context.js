'use strict';

const Joi = require('joi');
const debug = require('debug')('app:validateJoi');

module.exports = {
  /**
   * validate data with schema
   *
   * @param  {Object} schema  - validate rule object, see [parameter](https://github.com/node-modules/parameter)
   * @param  {Object} ctx - validate target, default to `this.request.body`
   */
  validateJoi(schema, ctx) {
   
    // data = data || this.request.body;
    // const errors = this.app.validator.validate(schema, data);
    // if (errors) {
    //   this.throw(422, 'Validation Failed', {
    //     code: 'invalid_param',
    //     errors,
    //   });
    // }
    // data = data || this.request.body;
    // if (!schema || !ctx) this.throw(422, 'schema is missing');
    console.log('validate~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', ctx.params);
    const toValidate = {};
    if (!schema) return;
    // params body query
    [ 'params', 'body', 'query' ].forEach(key => {
      if (schema[key]) {
        toValidate[key] = ctx[key];
        // debug(ctx)
      }
    });
    // const { error, value } = Joi.validate(toValidate, schema, options)
    // options = options || {
    //   abortEarly: false,
    // };
    // if (error) {
    //   ctx.error(error, 400)
    // }
    console.log('joi start');
    const { error, value } = Joi.validate(toValidate, schema);
    if (error) {
      const details = error && error.details || [];
      const failures = [];
      for (const detail of details) {
        failures.push(detail.message);
      }
      debug('err:', failures);
      throw new Error(failures);
    }
    console.log('joi end');
  },
};
