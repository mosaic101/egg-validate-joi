'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.validateJoi.name;
  }

  async show() {
    const { ctx, app } = this;
    const { Joi } = app;
    try {
      ctx.validateJoi({
        params: {
          id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
        },
      });
      const data = Object.assign({}, {
        params: ctx.params,
        query: ctx.query,
        body: ctx.request.body,
      });
      ctx.body = data;
    } catch (err) {
      ctx.body = JSON.parse(err.message);
    }
  }

  async create() {
    const { ctx, app } = this;
    const { Joi } = app;
    try {
      ctx.validateJoi({
        body: {
          id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
          name: Joi.string().required(),
          email: Joi.string().email().required(),
        },
      });
      const data = Object.assign({}, {
        params: ctx.params,
        query: ctx.query,
        body: ctx.request.body,
      });
      ctx.body = data;
    } catch (err) {
      ctx.body = JSON.parse(err.message);
    }
  }

  async createTopic() {
    const { ctx, app } = this;
    const { Joi } = app;
    try {
      ctx.validateJoi({
        params: {
          id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
        },
        body: {
          topicId: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
          name: Joi.string().required(),
        },
      });
      const data = Object.assign({}, {
        params: ctx.params,
        query: ctx.query,
        body: ctx.request.body,
      });
      ctx.body = data;
    } catch (err) {
      ctx.body = JSON.parse(err.message);
    }
  }
}

module.exports = HomeController;

