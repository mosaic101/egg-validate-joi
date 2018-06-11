# egg-validate-joi

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-validate-joi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-validate-joi
[travis-image]: https://img.shields.io/travis/eggjs/egg-validate-joi.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-validate-joi
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-validate-joi.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-validate-joi?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-validate-joi.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-validate-joi
[snyk-image]: https://snyk.io/test/npm/egg-validate-joi/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-validate-joi
[download-image]: https://img.shields.io/npm/dm/egg-validate-joi.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-validate-joi

<!--
Description here.
-->

## Install

```bash
$ npm i egg-validate-joi --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.validateJoi = {
  enable: true,
  package: 'egg-validate-joi',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.validateJoi = {
  options: {
    abortEarly: false,
  },
};

or

config.validateJoi = {
  options: {
    abortEarly: false,
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/mosaic101/egg-validate-joi/issues).

## License

[MIT](LICENSE)
