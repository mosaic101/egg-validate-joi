'use strict';

const Joi = require('joi');

module.exports = app => {
  app.Joi = Joi;
  app.config.coreMiddlewares.push('validateJoi');
};
