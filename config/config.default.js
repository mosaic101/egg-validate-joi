'use strict';

/**
 * egg-validate-joi default config
 * @member Config#validateJoi
 * @property {String} SOME_KEY - some description
 */
exports.validateJoi = {
  options: {
    abortEarly: false, // when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
  },
};
