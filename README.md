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
egg 版 joi 插件. 支持params、query、body 参数校验，更友好的 error 提示。需要更新请提issues

[joi-api@13.4.0](https://github.com/hapijs/joi/blob/v13.4.0/API.md)

## 依赖说明

### 依赖的 egg 版本

egg-validate-joi 版本 | egg 2.x
--- | ---
2.x | 😁
1.x | ❌
0.x | ❌

### 依赖的插件
- [joi](https://github.com/hapijs/joi)

## 安装
```bash
$ npm i egg-validate-joi --save
```

## 开启插件

```js
// config/plugin.js
exports.validateJoi = {
  enable: true,
  package: 'egg-validate-joi',
};
```

## 详细配置

[options配置参数选项](https://github.com/hapijs/joi/blob/v13.4.0/API.md#validatevalue-schema-options-callback)
```js
// {app_root}/config/config.default.js
exports.validateJoi = {
  options: {
    abortEarly: false, // when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
  },
};
```
or
```js
config.validateJoi = {
  options: {
    abortEarly: false,
  },
};
```
请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 使用例子

// {app_root}/app/router.js
```js
module.exports = app => {
  const { router, controller } = app;
  router.post('/', controller.home.create);
  router.post('/:id/topics', controller.home.createTopic);
};
```

// {app_root}/app/controller/home.js
```js
async create() {
  const { ctx, app } = this;
  const { Joi } = app;
  const errors = ctx.validateJoi({
    body: {
      id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  });
  if (errors) console.log(errors);
  // if errors exist, errors is object, for example:
  // errors: {
  //   'body.id': '"id" must be a valid GUID',
  //   'body.name': '"name" must be a string',
  //   'body.email': '"email" must be a valid email',
  // }

}

async createTopic() {
  const { ctx, app } = this;
  const { Joi } = app;
  const errors = ctx.validateJoi({
    params: {
      id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
    },
    body: {
      topicId: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
      name: Joi.string().required(),
    },
  });
  if (errors) console.log(errors);
  // if errors exist, errors is object, for example:
  // errors: {
  //   'params.id': '"id" must be a valid GUID',
  //   'body.topicId': '"id" must be a valid GUID',
  //   'body.name': '"name" must be a string',
  // }
}
```
## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/mosaic101/egg-validate-joi/issues) 异步交流。

## License

[MIT](LICENSE)
