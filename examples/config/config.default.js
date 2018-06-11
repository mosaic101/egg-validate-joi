'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528736419737_1893';

  // add your config here
  config.middleware = [];

  config.validateJoi = {
    options: {
      abortEarly: false,
    },
  };
  return config;
};
